import React from 'react';

import db from '../lib/db';

import '../styles/FavoritesList.scss';

export default function FavoritesList(props) {
	const editFavorite = async (e) => {
		const oldName = e.target.parentElement.querySelector('.saved-place__label').textContent
		const newName = prompt("New Name", oldName);
		
		if (newName !== oldName) {
			db.favorites.update(parseInt(e.target.value), { name: newName });
		}
	};
	
	return <ul className="favorites-list">
		{props.favoritePlaces.map(p => <li key={p.id} className="saved-place" data-lat={p.lat} data-lng={p.lng}>
			<span className="saved-place__label">{p.name}</span>
			<button className="ico ico--edit" onClick={editFavorite} value={p.id}>Edit</button>
			<button className="ico ico--delete">Delete</button>
		</li>)}
	</ul>;
}