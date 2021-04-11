function bearing(aLatLng, bLatLng) {
	const dL = bLatLng.lng - aLatLng.lng;
	
	const X = Math.cos(bLatLng.lat) * Math.sin(dL);
	const Y = Math.cos(aLatLng.lat) * Math.sin(bLatLng.lat) - Math.sin(aLatLng.lat) * Math.cos(bLatLng.lat) * Math.cos(dL);
	
	const radBearing = Math.atan(X, Y)
	const degBearing = radBearing * (180/Math.PI);
	
	return degBearing;
}

function distance(aLatLng, bLatLng) {
	const aRadLat = Math.PI * aLatLng.lat / 180;
	const bRadLat = Math.PI * bLatLng.lat / 180;
	const theta = Math.PI * (aLatLng.lng - bLatLng.lng) / 180;
	
	const dist = Math.acos(Math.sin(aRadLat) * Math.sin(bRadLat) + Math.cos(aRadLat) * Math.cos(bRadLat) * Math.cos(theta)) * 180 / Math.PI * 111.1895;
	
	return dist;
}

export { bearing, distance };