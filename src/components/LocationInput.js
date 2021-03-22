import React from 'react';
import classnames from 'classnames';

export default function LocationInput(props) {
	return <form className={classnames('location-input', props.className)}>
		<div className="location-input__fields">
			{props.children}
		</div>
		
		<footer className="location-input__footer">
			<input type="submit" value="Search" />
		</footer>
	</form>;
}