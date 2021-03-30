import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Script from 'react-load-script';

import MapsSDKState from './lib/MapsSDKState';

import Navigation from './components/Navigation';
import LocationInput from './components/LocationInput';
import FavoritesInput from './components/FavoritesInput';

import './styles/App.scss';
import './styles/ico.scss';

function App() {
	const [mapsSDKState, setMapsSDKState] = useState(MapsSDKState.LOADING);
	const [address, setAddress] = useState('');
	const [lat, setLat] = useState(0);
	const [lng, setLng] = useState(0);
	
	const onAddressSubmit = e => {
		e.preventDefault();
		
		console.log('onAddressSubmit', e);
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
							
							{mapsSDKState === MapsSDKState.LOADING && <p className="message">Loading</p>}
							
							{mapsSDKState === MapsSDKState.ERROR && <p className="message message-error">Error</p>}
							
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
							<FavoritesInput favoritePlaces={[
								{ id: 1, name: 'Shumen Home', lat: 43.2658149, lng: 26.9442749 },
								{ id: 2, name: 'Shumen Hristo', lat: 43.2715686, lng: 26.9259447 },
								{ id: 3, name: 'Varna Home', lat: 43.2162011, lng: 27.890922 },
								{ id: 4, name: 'Varna Office', lat: 43.2258173, lng: 27.8510748 },
								{ id: 5, name: 'Varna House', lat: 43.215770, lng: 27.958105 }
							]} />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
