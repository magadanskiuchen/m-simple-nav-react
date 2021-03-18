import React from 'react';
import classnames from 'classnames';

class LocationInput extends React.Component {
	render() {
		return (
			<form className={classnames('location-input', this.props.className)}>
				<div className="location-input__fields">
					{this.props.children}
				</div>
				
				<footer className="location-input__footer">
					<input type="submit" value="Search" />
				</footer>
			</form>
		);
	}
}

export default LocationInput;