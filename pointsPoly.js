this.pointInPoly = function (poly, pt) {
	var i, j, c = false;
	j = poly.length - 1;
	for (i = 0; i < poly.length; i++) {
		if ((((poly[i].y <= pt.y) && (pt.y < poly[j].y)) || ((poly[j].y <= pt.y) && (pt.y < poly[i].y))) &&
			(pt.x < (poly[j].x - poly[i].x) * (pt.y - poly[i].y) / (poly[j].y - poly[i].y) + poly[i].x)){
			c =!c;
		}
		j = i;
	}
	return c;
};
