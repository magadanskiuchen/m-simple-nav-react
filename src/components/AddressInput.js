import React from 'react';

class AddressInput extends React.Component {
	render() {
		return (
			<form className="location-input location-input--address">
				<input type="text" placeholder="Address" />
				<input type="submit" value="Search" />
			</form>
		);
	}
}

export default AddressInput;