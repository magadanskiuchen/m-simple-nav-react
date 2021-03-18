import React from 'react';

class AddressInput extends React.Component {
	render() {
		return (
			<form className="location-input location-input--address">
				<div className="location-input__fields">
					<input type="text" placeholder="Address" />
				</div>
				
				<footer className="location-input__footer">
					<input type="submit" value="Search" />
				</footer>
			</form>
		);
	}
}

export default AddressInput;