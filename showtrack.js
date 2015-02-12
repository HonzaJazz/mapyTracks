function mapInit(elementName){
	var center = SMap.Coords.fromWGS84(14.41790, 50.12655);
	var m = new SMap(JAK.gel(elementName), center, 13);

	m.addDefaultLayer(SMap.DEF_OPHOTO);
	m.addDefaultLayer(SMap.DEF_TURIST_WINTER);
	m.addDefaultLayer(SMap.DEF_TURIST).enable();

	var layerSwitch = new SMap.Control.Layer();
	layerSwitch.addDefaultLayer(SMap.DEF_TURIST);
	layerSwitch.addDefaultLayer(SMap.DEF_OPHOTO);
	layerSwitch.addDefaultLayer(SMap.DEF_TURIST_WINTER);

	m.addDefaultControls();
	m.addControl(layerSwitch, {left:"8px", top:"9px"});
	return m;
}

map = mapInit("m");