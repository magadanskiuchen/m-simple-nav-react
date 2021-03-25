import React from 'react';
import classnames from 'classnames';

import '../styles/LocationInput.scss';

export default function LocationInput(props) {
	return <form className={classnames('location-input', props.className)} onSubmit={props.onSubmit}>
		<div className="location-input__fields">
			{props.children}
		</div>
		
		<footer className="location-input__footer">
			<input className="location-input__field btn" type="submit" value="Search" />
		</footer>
	</form>;
}