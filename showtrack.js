function mapInit(elementName){
	var center = SMap.Coords.fromWGS84(14.41790, 50.12655);
	var m = new SMap(JAK.gel(elementName), center, 13);

	m.addDefaultLayer(SMap.DEF_OPHOTO);
	m.addDefaultLayer(SMap.DEF_TURIST_WINTER);
	m.addDefaultLayer(SMap.DEF_TURIST).enable();
	m.getLayer(SMap.DEF_TURIST).setTrail(true);

	var layerSwitch = new SMap.Control.Layer();
	layerSwitch.addDefaultLayer(SMap.DEF_TURIST);
	layerSwitch.addDefaultLayer(SMap.DEF_OPHOTO);
	layerSwitch.addDefaultLayer(SMap.DEF_TURIST_WINTER);

	//m.addDefaultControls();
	var mouse = new SMap.Control.Mouse(SMap.MOUSE_PAN | SMap.MOUSE_WHEEL | SMap.MOUSE_ZOOM); /* Ovládání myší */
	m.addControl(mouse);
	m.addControl(layerSwitch, {left:"8px", top:"9px"});
	return m;
}

function showGpx(url) {
	var xhr = new JAK.Request(JAK.Request.XML);
	xhr.setCallback(window, "response");
	xhr.send(url);
}

function response(xmlDoc) {
    var gpx = new SMap.Layer.GPX(xmlDoc);
    map.addLayer(gpx);
    gpx.enable();
    gpx.fit();
}

map = mapInit("m");
showGpx(location.search.substring(1));