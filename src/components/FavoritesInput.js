import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/FavoritesInput.scss';

export default function FavoritesInput(props) {
	return <ul className="favorites-list">
		{props.favoritePlaces.map(p => <li key={p.id} className="saved-place" data-lat={p.lat} data-lng={p.lng}>
			<span className="saved-place__label">{p.name}</span>
			<button className="ico ico--edit">Edit</button>
			<button className="ico ico--delete">Delete</button>
		</li>)}
	</ul>;
}