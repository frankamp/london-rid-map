if (Modernizr.svg) (function() {
  var po = org.polymaps;

  var poly = "M8.136,-13.608L8.136,-21.312L12.528,-21.312Q13.5,-21.312 14.4,-21.168Q15.3,-21.024 15.984,-20.61Q16.668,-20.196 17.082,-19.44Q17.496,-18.684 17.496,-17.46Q17.496,-16.236 17.082,-15.48Q16.668,-14.724 15.984,-14.31Q15.3,-13.896 14.4,-13.752Q13.5,-13.608 12.528,-13.608ZM2.484,-25.704L2.484,0.0L8.136,0.0L8.136,-9.216L14.076,-9.216Q16.488,-9.216 18.18,-9.918Q19.872,-10.62 20.934,-11.772Q21.996,-12.924 22.482,-14.418Q22.968,-15.912 22.968,-17.46Q22.968,-19.044 22.482,-20.52Q21.996,-21.996 20.934,-23.148Q19.872,-24.3 18.18,-25.002Q16.488,-25.704 14.076,-25.704ZM30.48,-9.288Q30.48,-10.404 30.696,-11.484Q30.912,-12.564 31.434,-13.392Q31.956,-14.22 32.82,-14.742Q33.684,-15.264 34.98,-15.264Q36.276,-15.264 37.158,-14.742Q38.04,-14.22 38.562,-13.392Q39.084,-12.564 39.3,-11.484Q39.516,-10.404 39.516,-9.288Q39.516,-8.172 39.3,-7.11Q39.084,-6.048 38.562,-5.202Q38.04,-4.356 37.158,-3.852Q36.276,-3.348 34.98,-3.348Q33.684,-3.348 32.82,-3.852Q31.956,-4.356 31.434,-5.202Q30.912,-6.048 30.696,-7.11Q30.48,-8.172 30.48,-9.288ZM25.368,-9.288Q25.368,-7.056 26.052,-5.256Q26.736,-3.456 27.996,-2.178Q29.256,-0.9 31.02,-0.216Q32.784,0.468 34.98,0.468Q37.176,0.468 38.958,-0.216Q40.74,-0.9 42.0,-2.178Q43.26,-3.456 43.944,-5.256Q44.628,-7.056 44.628,-9.288Q44.628,-11.52 43.944,-13.338Q43.26,-15.156 42.0,-16.434Q40.74,-17.712 38.958,-18.414Q37.176,-19.116 34.98,-19.116Q32.784,-19.116 31.02,-18.414Q29.256,-17.712 27.996,-16.434Q26.736,-15.156 26.052,-13.338Q25.368,-11.52 25.368,-9.288ZM48.088,-25.704L48.088,0.0L53.2,0.0L53.2,-25.704ZM66.124,2.304L73.9,-18.612L68.608,-18.612L64.54,-5.868L64.468,-5.868L60.256,-18.612L54.82,-18.612L61.336,-1.152Q61.552,-0.612 61.552,0.0Q61.552,0.828 61.066,1.512Q60.58,2.196 59.572,2.304Q58.816,2.34 58.06,2.268Q57.304,2.196 56.584,2.124L56.584,6.336Q57.376,6.408 58.15,6.462Q58.924,6.516 59.716,6.516Q62.344,6.516 63.82,5.544Q65.296,4.572 66.124,2.304Z";

  var maps = "M76.088,-18.612L76.088,0.0L81.2,0.0L81.2,-10.8Q81.2,-12.168 81.596,-13.014Q81.992,-13.86 82.55,-14.31Q83.108,-14.76 83.702,-14.922Q84.296,-15.084 84.656,-15.084Q85.88,-15.084 86.51,-14.67Q87.14,-14.256 87.41,-13.572Q87.68,-12.888 87.716,-12.078Q87.752,-11.268 87.752,-10.44L87.752,0.0L92.864,0.0L92.864,-10.368Q92.864,-11.232 92.99,-12.078Q93.116,-12.924 93.494,-13.59Q93.872,-14.256 94.538,-14.67Q95.204,-15.084 96.284,-15.084Q97.364,-15.084 97.994,-14.724Q98.624,-14.364 98.948,-13.752Q99.272,-13.14 99.344,-12.312Q99.416,-11.484 99.416,-10.548L99.416,0.0L104.528,0.0L104.528,-12.456Q104.528,-14.256 104.024,-15.534Q103.52,-16.812 102.62,-17.604Q101.72,-18.396 100.46,-18.756Q99.2,-19.116 97.724,-19.116Q95.78,-19.116 94.358,-18.18Q92.936,-17.244 92.108,-16.02Q91.352,-17.748 89.894,-18.432Q88.436,-19.116 86.672,-19.116Q84.836,-19.116 83.414,-18.324Q81.992,-17.532 80.984,-16.092L80.912,-16.092L80.912,-18.612ZM108.728,-12.888L113.84,-12.888Q113.984,-14.4 114.848,-15.048Q115.712,-15.696 117.224,-15.696Q117.908,-15.696 118.502,-15.606Q119.096,-15.516 119.546,-15.246Q119.996,-14.976 120.266,-14.49Q120.536,-14.004 120.536,-13.176Q120.572,-12.384 120.068,-11.97Q119.564,-11.556 118.7,-11.34Q117.836,-11.124 116.72,-11.016Q115.604,-10.908 114.452,-10.728Q113.3,-10.548 112.166,-10.242Q111.032,-9.936 110.15,-9.324Q109.268,-8.712 108.71,-7.686Q108.152,-6.66 108.152,-5.076Q108.152,-3.636 108.638,-2.592Q109.124,-1.548 109.988,-0.864Q110.852,-0.18 112.004,0.144Q113.156,0.468 114.488,0.468Q116.216,0.468 117.872,-0.036Q119.528,-0.54 120.752,-1.8Q120.788,-1.332 120.878,-0.882Q120.968,-0.432 121.112,0.0L126.296,0.0Q125.936,-0.576 125.792,-1.728Q125.648,-2.88 125.648,-4.14L125.648,-13.824Q125.648,-15.516 124.892,-16.542Q124.136,-17.568 122.948,-18.144Q121.76,-18.72 120.32,-18.918Q118.88,-19.116 117.476,-19.116Q115.928,-19.116 114.398,-18.81Q112.868,-18.504 111.644,-17.784Q110.42,-17.064 109.628,-15.876Q108.836,-14.688 108.728,-12.888ZM120.536,-9.108L120.536,-7.2Q120.536,-6.768 120.446,-6.048Q120.356,-5.328 119.96,-4.626Q119.564,-3.924 118.736,-3.42Q117.908,-2.916 116.396,-2.916Q115.784,-2.916 115.208,-3.024Q114.632,-3.132 114.2,-3.402Q113.768,-3.672 113.516,-4.14Q113.264,-4.608 113.264,-5.292Q113.264,-6.012 113.516,-6.48Q113.768,-6.948 114.182,-7.254Q114.596,-7.56 115.154,-7.74Q115.712,-7.92 116.288,-8.028Q116.9,-8.136 117.512,-8.208Q118.124,-8.28 118.682,-8.388Q119.24,-8.496 119.726,-8.658Q120.212,-8.82 120.536,-9.108ZM139.34,-3.348Q138.116,-3.348 137.252,-3.852Q136.388,-4.356 135.866,-5.166Q135.344,-5.976 135.11,-7.056Q134.876,-8.136 134.876,-9.252Q134.876,-10.404 135.092,-11.484Q135.308,-12.564 135.83,-13.392Q136.352,-14.22 137.198,-14.742Q138.044,-15.264 139.304,-15.264Q140.528,-15.264 141.374,-14.742Q142.22,-14.22 142.76,-13.374Q143.3,-12.528 143.534,-11.448Q143.768,-10.368 143.768,-9.252Q143.768,-8.136 143.552,-7.056Q143.336,-5.976 142.814,-5.166Q142.292,-4.356 141.446,-3.852Q140.6,-3.348 139.34,-3.348ZM129.944,-18.612L129.944,6.516L135.056,6.516L135.056,-2.304L135.128,-2.304Q136.064,-0.936 137.522,-0.234Q138.98,0.468 140.708,0.468Q142.76,0.468 144.29,-0.324Q145.82,-1.116 146.846,-2.448Q147.872,-3.78 148.376,-5.508Q148.88,-7.236 148.88,-9.108Q148.88,-11.088 148.376,-12.906Q147.872,-14.724 146.828,-16.092Q145.784,-17.46 144.2,-18.288Q142.616,-19.116 140.42,-19.116Q138.692,-19.116 137.252,-18.432Q135.812,-17.748 134.876,-16.236L134.804,-16.236L134.804,-18.612ZM155.904,-6.048L151.044,-6.048Q151.116,-4.176 151.89,-2.934Q152.664,-1.692 153.87,-0.936Q155.076,-0.18 156.624,0.144Q158.172,0.468 159.792,0.468Q161.376,0.468 162.906,0.162Q164.436,-0.144 165.624,-0.9Q166.812,-1.656 167.55,-2.898Q168.288,-4.14 168.288,-5.976Q168.288,-7.272 167.784,-8.154Q167.28,-9.036 166.452,-9.63Q165.624,-10.224 164.562,-10.584Q163.5,-10.944 162.384,-11.196Q161.304,-11.448 160.26,-11.664Q159.216,-11.88 158.406,-12.15Q157.596,-12.42 157.092,-12.852Q156.588,-13.284 156.588,-13.968Q156.588,-14.544 156.876,-14.886Q157.164,-15.228 157.578,-15.408Q157.992,-15.588 158.496,-15.642Q159.0,-15.696 159.432,-15.696Q160.8,-15.696 161.808,-15.174Q162.816,-14.652 162.924,-13.176L167.784,-13.176Q167.64,-14.904 166.902,-16.038Q166.164,-17.172 165.048,-17.856Q163.932,-18.54 162.51,-18.828Q161.088,-19.116 159.576,-19.116Q158.064,-19.116 156.624,-18.846Q155.184,-18.576 154.032,-17.91Q152.88,-17.244 152.178,-16.092Q151.476,-14.94 151.476,-13.14Q151.476,-11.916 151.98,-11.07Q152.484,-10.224 153.312,-9.666Q154.14,-9.108 155.202,-8.766Q156.264,-8.424 157.38,-8.172Q160.116,-7.596 161.646,-7.02Q163.176,-6.444 163.176,-5.292Q163.176,-4.608 162.852,-4.158Q162.528,-3.708 162.042,-3.438Q161.556,-3.168 160.962,-3.042Q160.368,-2.916 159.828,-2.916Q159.072,-2.916 158.37,-3.096Q157.668,-3.276 157.128,-3.654Q156.588,-4.032 156.246,-4.626Q155.904,-5.22 155.904,-6.048Z";

  var end = document.body;
  while (end.lastChild && end.lastChild.tagName) end = end.lastChild;
  if (end != document.body) end = end.parentNode;

  var svg = n$(end).add("svg:svg")
      .attr("width", 180)
      .attr("height", 40)
      .attr("stroke-width", .75);

  var defs = svg.add("svg:defs");

  defs.add("svg:marker")
      .attr("id", "dot")
      .attr("viewBox", "-1 -1 2 2")
      .attr("markerUnits", "userSpaceOnUse")
      .attr("markerWidth", 2.25)
      .attr("markerHeight", 2.25)
    .add("svg:circle")
      .attr("r", 1);

  svg.add("svg:rect")
      .attr("pointer-events", "all")
      .attr("fill", "none")
      .attr("height", "100%")
      .attr("width", "100%");

  var g = svg.add("svg:g")
      .attr("transform", "translate(6,30)");

  g.add("svg:path")
      .attr("d", poly)
      .attr("class", "poly")
      .attr("marker-mid", "url(#dot)");

  g.add("svg:path")
      .attr("d", maps)
      .attr("class", "maps");
})();
