
/**
 * Module dependencies.
 */
var ridict = require('ridict');
var facets = ridict.facets;
var facetres = ridict.facet_matchers;
var redis;
try { redis = require("redis").createClient(); } catch(e) {}

var boroughs = {};
var fs = require("fs");

Object.keys(facets).forEach(function (key) {
	var newRE = facets[key].join("|");
	newRE = "(" + newRE.replace(new RegExp("\\*", 'g'),".*?\\b") + ")";
	facetres[key] = new RegExp(newRE);
});

if(redis){
  redis.on("error", function (err) {
    console.log("Redis says: " + err);
  });

  redis.on("ready", function () {
    console.log("Redis ready.");
    console.log("================= WARNING BEGIN ==============");
    console.log("If you did not point redis at the london-rid dump.rdb then this is the wrong redis.");
    console.log("You should comment out the try catch require redis and force it not to load.");
    console.log("================= WARNING END ==============");
  });

  redis.on("reconnecting", function (arg) {
    console.log("Redis reconnecting: " + JSON.stringify(arg));
  });
  redis.on("connect", function () {
    console.log("Redis connected.");
  });
}

GLOBAL.redis = redis;
GLOBAL.facets = facets;
GLOBAL.boroughs = boroughs;

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();
var io;
try { io = require('socket.io').listen(app); } catch(e) {}
var sockets = {};
if(io){
  io.sockets.on('connection', function (socket) {
    sockets[socket.id] = socket;
    socket.on('disconnect', function () {
      delete sockets[socket.id];
    });
  });
}

// twitter-node does not modify GLOBAL, that's so rude
var sys = require('util');
var fs = require('fs');
var points = require('./pointsPoly');
var boroughutils = require('./boroughs');
var async = require('async');

function clearStats(boroughs){
	var vals = [];
	Object.keys(boroughs).forEach(function (borough) {
		Object.keys(facetres).forEach(function (key) {
			vals.push(borough+'_'+key);
			vals.push(0);
		});
		vals.push(borough+'_all');
		vals.push(0);
	});
	Object.keys(facetres).forEach(function (key) {
		vals.push('unknown_'+key);
		vals.push(0);
	});
	redis.mset(vals, function(err,result){
		if (err) return console.log(err);
		console.log("Cleared values.");
	});
}

function setup(){
	console.log("Setting up.");
	boroughutils.getBoroughs('/boroughs', function(err, data){
		Object.keys(data).some(function (key) {
			boroughs[key] = data[key];
		});
		//clearStats(boroughs);
		//main();
	});
}

function main(){

	console.log("data/London.json is not included in the source package because I don't have redistribution rights");
	console.log("it is basically tweets in the raw streaming api format jammed in a file");
	var tweetCount = 0;
	var rs = fs.createReadStream('data/London.json', {encoding: "utf-8"});
	var tail = "";
	rs.on('data', function(data) {
		data.split("}\n{").forEach(function(item){
			if(tail !== ""){
				try {
					JSON.parse("{" + tail + item + "}");
					item = tail + item;
				}catch (err) {
					//no op. If parsable then we reassigned item, if not then oh well.
				}
				tail = "";
			}
			try {
				tweet = JSON.parse("{" + item + "}");
				if(tweet.lat){
					tweetCount++;
					if (tweetCount % 1000 === 0){
						console.log("Parsed " + tweetCount + " tweets.");
					}
					var matches = [];
					var borough = 'unknown';
					Object.keys(boroughs).some(function (key) {
						if (points.pointInPoly(boroughs[key],{x: tweet.lat,y: tweet.lon})){
							borough = key;
							return true;
						}
					});
					redis.incr(borough+'_all');
					Object.keys(facetres).forEach(function (key) {
						if (facetres[key].test(tweet.tweet.toUpperCase())){
							matches.push(key);
							redis.incr(borough+'_'+key);
						}
					});
					Object.keys(sockets).forEach(function(socketid){
						sockets[socketid].emit('news', { hello: "@" + tweet.screen_name + ": " + tweet.tweet, facets: matches, borough: borough});	
					});
				}else{
					// sometimes we end up with valid json but incomplete tweet because of a buffer boundary
					// just put it in tail and let it wrap around
					tail = item;
				}
			}catch(err) { //piss poor catch is around too much code, catching just the JSON.parse is the intent
				//console.log("tried to make a json out of " + item);
				tail = item;
			}
		});
	});
}



// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});


// Routes
app.get('/', routes.map);
app.get('/map', routes.map);
if(redis){
  app.get('/features.json', routes.features);
}else{
  app.get('/features.json', function(req, res){ res.sendfile('public/static/features.json');});
}
app.get('/:borough', routes.borough);
app.get('/stats.json/:borough', routes.statslondon);
app.listen(3000);
setup();
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
