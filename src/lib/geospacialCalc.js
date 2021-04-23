function radians(deg) {
	return deg * (Math.PI / 180);
}

function degrees(rad) {
	return rad * (180 / Math.PI);
}

function bearing(aLatLng, bLatLng) {
	const startLatRad = radians(aLatLng.lat);
	const startLngRad = radians(aLatLng.lng);
	const endLatRad = radians(bLatLng.lat);
	const endLngRad = radians(bLatLng.lng);
	
	let dL = endLngRad - startLngRad;
	const dPhi = Math.log( Math.tan(endLatRad/2 + Math.PI/4) / Math.tan(startLatRad/2 + Math.PI/4) );
	
	if (Math.abs(dL) > Math.PI) {
		if (dL > 0) {
			dL = -(2 * Math.PI - dL);
		} else {
			dL = 2 * Math.PI + dL;
		}
	}
	
	return (degrees(Math.atan2(dL, dPhi)) + 360) % 360;
}

function distance(aLatLng, bLatLng) {
	if (aLatLng.lat === 0 || aLatLng.lng === 0 || bLatLng.lat === 0 || bLatLng.lng === 0) {
		return;
	}
	
	const aRadLat = Math.PI * aLatLng.lat / 180;
	const bRadLat = Math.PI * bLatLng.lat / 180;
	const theta = Math.PI * (aLatLng.lng - bLatLng.lng) / 180;
	
	const dist = Math.acos(Math.sin(aRadLat) * Math.sin(bRadLat) + Math.cos(aRadLat) * Math.cos(bRadLat) * Math.cos(theta)) * 180 / Math.PI * 111.1895;
	
	return dist;
}

export { bearing, distance };