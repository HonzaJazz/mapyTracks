function mapInit(elementName){
	var center = SMap.Coords.fromWGS84(14.41790, 50.12655);
	var m = new SMap(JAK.gel(elementName), center, 5);

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

function showGPXDoc(url){
	var xmlhttp;
	if (window.XMLHttpRequest){// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			var xmlSrc=xmlhttp.responseXML;
			var gpx = new SMap.Layer.GPX(xmlSrc);
			map.addLayer(gpx);
			gpx.enable();
			gpx.fit();
		}
	}
	xmlhttp.open("GET",url,true);
	if (xmlhttp.overrideMimeType){
		xmlhttp.overrideMimeType('text/xml');
	}
	xmlhttp.send();
}


map = mapInit("m");
showGPXDoc(location.search.substring(1));