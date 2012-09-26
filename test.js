var points = require("./pointsPoly");
var boroughs = require("./boroughs");


runTest = function(boundary, point, actual){
	console.log(points.pointInPoly(boundary, point) ? actual : "Out");
};

runTests = function (boundary, name){
	console.log('Bourough: ' + name);
	runTest(boundary, {x: 51.548, y: 0.1258}, "barking");  // parslows park in barking Lat Lon
	runTest(boundary, {x: 51.5585, y: 0.0705}, "redbridge");			// ilford in redbridge
	runTest(boundary, {x: 51.5154, y:-0.0991}, "city");			// st pauls cathedral in city
	runTest(boundary, {x:51.4606, y:0.1375}, "bexley");
	runTest(boundary, {x:51.616, y:-0.2226}, "barnet");
};

boroughs.getBoroughs('/data/boroughs', function(err, data){
	if (err) return console.log(err);
	Object.keys(data).some(function (key) {
		runTests(data[key],key);
	});
});
