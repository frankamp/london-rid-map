var fs = require('fs'),
	xml2js = require('xml2js'),
	async = require('async');
var parser = new xml2js.Parser({mergeAttrs:true,explicitArray:false});

this.getBoroughs = function(directory, callback) {

	var map = function(arr,func){
		var target = [];
		arr.forEach(function(item){
			target.push(func(item));
		});
		return target;
	};

	var fullPath = function(file){
		return __dirname + directory + "/" + file;
	};

	var name = function(file){
		return file.split('.')[0];
	};

	var parseGPX = function(xml){
		var points = [];
		xml.gpx.rte.rtept.forEach(function(pt){
			points.push({x:parseFloat(pt.lat),y:parseFloat(pt.lon)});
		});
		return points;
	};
	
	var parseFiles = function(files,names){
		async.map(files,parser.parseString,function(err,xml){
			if (err) return callback(err);
			var target = {};
			names.forEach(function (borough, index){
				target[borough] = parseGPX(xml[index]);
			});
			return callback(null, target);
		});
	};

	fs.readdir(__dirname + directory, function(err,files){
		if (err) return callback(err);
		var pathed = map(files,fullPath);
		async.map(pathed,fs.readFile,function(err, data){
			if (err) return callback(err);
			parseFiles(data,map(files,name));
		});
	});
};