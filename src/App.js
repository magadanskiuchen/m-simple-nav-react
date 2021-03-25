import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import LocationInput from './components/LocationInput';
import FavoritesInput from './components/FavoritesInput';

import './styles/App.scss';
import './styles/ico.scss';

function App() {
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
							<LocationInput className="location-input--address" onSubmit={onAddressSubmit}>
								<input name="address" className="location-input__field" type="text" placeholder="Address" />
							</LocationInput>
						</Route>
						<Route exact path="/lat-lng">
							<LocationInput className="location-input--lat-lng" onSubmit={onLatLngSubmit}>
								<input name="lat" className="location-input__field" type="text" placeholder="Latitude" />
								<input name="lng" className="location-input__field" type="text" placeholder="Longitude" />
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
