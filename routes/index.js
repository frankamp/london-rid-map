/*
 * GET home page.
 */

exports.index = function(req, res){
	var title = "Home";
	res.render('index', { title: title, facets: facets});
};

exports.map = function(req, res){
	var title = "Map";
	if (req.params.facet !== null){
		facet = req.params.facet;
	}
	var facets = [];
	Object.keys(GLOBAL.facets).forEach(function (item) {
		facets.push(item);
	});
	res.render('map', { title: title, facets: facets});
};

exports.borough = function(req, res){
	var borough = 'unknown';
	if (req.params.borough)
		borough = req.params.borough;
	var title ="Stats for " + borough ;
	res.render('borough', { title: title, borough: borough});
};

exports.statslondon = function(req, res){
	console.log('stats');
	var keys = [];
	var data= {};
	var multi = GLOBAL.redis.multi();
	Object.keys(GLOBAL.facets).forEach(function (item) {
		multi.get(req.params.borough + '_' + item);
	});
	multi.exec(function(err,result){
		Object.keys(GLOBAL.facets).forEach(function (item) {
			data[item] = Number(result.shift());
		});
		res.json(data);
	});
};

exports.features = function(req, res){
	var f = {type:"FeatureCollection",features:[]};
	var holder = {};
	var multi = GLOBAL.redis.multi();
	Object.keys(GLOBAL.boroughs).some(function (key) {
		var coordinates = [];
		boroughs[key].forEach(function(item){
			coordinates.push([item.y, item.x]);
		});
		coordinates.push([boroughs[key][0].y, boroughs[key][0].x]);
		Object.keys(GLOBAL.facets).forEach(function (item) {
			multi.get(key + '_' + item);
		});
		multi.get(key + '_all');
		holder[key] = {
			geometry: {type: "Polygon", coordinates: [coordinates]},
			id: "borough:" + f.features.length,
			type: "Feature",
			properties: null
		};
	});
	multi.exec(function(err,result){
		Object.keys(GLOBAL.boroughs).some(function (key) {
			var stats = {name:key,total:0,facets:{},rates:{}};
			Object.keys(GLOBAL.facets).forEach(function (item) {
				stats.facets[item] = Number(result.shift());
			});
			stats.total = Number(result.shift());
			Object.keys(GLOBAL.facets).forEach(function (item) {
				stats.rates[item] = (stats.facets[item] / stats.total) * 100;
			});
			holder[key].properties = stats;
			f.features.push(holder[key]);
		});
		res.json(f);
	});
};