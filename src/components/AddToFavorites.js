import React from 'react';

import '../styles/AddToFavorites.scss';

export default function AddToFavorites(props) {
	return <div className="add-to-favorites">
		<p className="add-to-favorites__details">
			<strong>{props.name}</strong> (<span>Lat: {props.lat}</span>, <span>Lng: {props.lng}</span>)
		</p>
		<button className="btn">Save</button>
	</div>;
}