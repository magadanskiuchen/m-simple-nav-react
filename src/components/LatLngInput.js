import React from 'react';

class LatLngInput extends React.Component {
	render() {
		return (
			<form className="location-input location-input--lat-lng">
				<div className="location-input__fields">
					<input type="text" placeholder="Latitude" />
					<input type="text" placeholder="Longitude" />
				</div>
				
				<footer className="location-input__footer">
					<input type="submit" value="Search" />
				</footer>
			</form>
		);
	}
}

export default LatLngInput;