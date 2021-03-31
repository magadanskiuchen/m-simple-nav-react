import React, { useState } from 'react';

import db from '../lib/db';

import Message from '../components/Message';

import '../styles/AddToFavorites.scss';

export default function AddToFavorites(props) {
	const [message, setMessage] = useState('');
	
	const save = () => {
		const name = prompt("Enter a name for the destination", props.name);
		
		if (name) {
			db.favorites.add({ name, lat: props.lat, lng: props.lng })
				.then(() => {
					setMessage('Destination added to favorites');
					
					setTimeout(() => {
						setMessage('');
					}, 4000);
				});
		}
	};
	
	return <>
		<div className="add-to-favorites">
			<p className="add-to-favorites__details">
				<strong>{props.name}</strong> (<span>Lat: {props.lat}</span>, <span>Lng: {props.lng}</span>)
			</p>
			<button className="btn" onClick={save}>Save</button>
		</div>
		
		{message && <Message>{message}</Message>}
	</>;
}