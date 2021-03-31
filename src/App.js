import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Script from 'react-load-script';

import MapsSDKState from './lib/MapsSDKState';
import db from './lib/db';

import Navigation from './components/Navigation';
import LocationInput from './components/LocationInput';
import FavoritesInput from './components/FavoritesInput';
import Message from './components/Message';
import AddToFavorites from './components/AddToFavorites';

import './styles/App.scss';
import './styles/ico.scss';

function App() {
	const [mapsSDKState, setMapsSDKState] = useState(MapsSDKState.LOADING);
	const [address, setAddress] = useState('');
	const [lat, setLat] = useState(0);
	const [lng, setLng] = useState(0);
	const [favoritePlaces, setFavoritePlaces] = useState([]);
	
	useEffect(() => {
		db.favorites.toArray().then(favorites => {
			setFavoritePlaces(favorites);
		});
	});
	
	const onAddressSubmit = e => {
		e.preventDefault();
		
		const geocoder = new window.google.maps.Geocoder();
		
		geocoder.geocode({ address }, (result, status) => {
			if (status === 'OK' && result.length > 0) {
				setLat(result[0].geometry.location.lat());
				setLng(result[0].geometry.location.lng());
			}
		});
	};
	
	const onLatLngSubmit = e => {
		e.preventDefault();
		
		console.log('onLatLngSubmit', e);
	};
	
	return (
		<div className="app">
			<Router>
				<header className="header">
					<Navigation links={[
						{ url: '/', label: 'Address', ico: 'search' },
						{ url: '/lat-lng', label: 'Lat/Lng', ico: 'marker' },
						{ url: '/favorites', label: 'Favorites', ico: 'favorite' }
					]} />
				</header>
				
				<div className="destination-input">
					<Switch>
						<Route exact path="/">
							<Script
								url={'https://maps.googleapis.com/maps/api/js?key=' + process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
								onCreate={() => setMapsSDKState(MapsSDKState.LOADING)}
								onError={() => setMapsSDKState(MapsSDKState.ERROR)}
								onLoad={() => setMapsSDKState(MapsSDKState.LOADED)}
							/>
							
							{mapsSDKState === MapsSDKState.LOADING && <Message>Loading</Message>}
							
							{mapsSDKState === MapsSDKState.ERROR && <Message error>
								<p><strong>Error:</strong> could not load Google Maps JS SDK.</p>
								
								<p>This may be expected if you're offline. If so, please either use direct GPS coordinates input or select a destination from your favorites.</p>
							</Message>}
							
							{mapsSDKState === MapsSDKState.LOADED && <LocationInput key="location-input--address" className="location-input--address" onSubmit={onAddressSubmit}>
								<input name="address" className="location-input__field" type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} />
							</LocationInput>}
						</Route>
						<Route exact path="/lat-lng">
							<LocationInput key="location-input--lat-lng" className="location-input--lat-lng" onSubmit={onLatLngSubmit}>
								<input name="lat" className="location-input__field" type="text" placeholder="Latitude" value={lat || ''} onChange={e => setLat(e.target.value)} />
								<input name="lng" className="location-input__field" type="text" placeholder="Longitude" value={lng || ''} onChange={e => setLng(e.target.value)} />
							</LocationInput>
						</Route>
						<Route exact path="/favorites">
							{favoritePlaces && <FavoritesInput favoritePlaces={favoritePlaces} />}
							
							{address && <AddToFavorites name={address} lat={lat} lng={lng} />}
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
