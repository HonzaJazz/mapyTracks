var centerMap = SMap.Coords.fromWGS84(14.40, 50.08);
var m = new SMap(JAK.gel("m"), centerMap, 6);
var l = m.addDefaultLayer(SMap.DEF_BASE).enable();
m.addDefaultControls();                    

var layer = new SMap.Layer.Marker();
var clusterer = new SMap.Marker.Clusterer(m);
layer.setClusterer(clusterer);

for (var i=0;i<1000;i++) {
    var x = 3*Math.random() + 13;
    var y = Math.random() + 49.5;
    var coords = SMap.Coords.fromWGS84(x, y);
    var marker = new SMap.Marker(coords);
    layer.addMarker(marker);
}

m.addLayer(layer).enable();
