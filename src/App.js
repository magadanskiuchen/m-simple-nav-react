import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import LocationInput from './components/LocationInput';
import FavoritesInput from './components/FavoritesInput';

import './App.css';

function App() {
	return (
		<div className="app">
			<Router>
				<Header links={[
					{ url: '/', label: 'Address' },
					{ url: '/lat-lng', label: 'Lat/Lng' },
					{ url: '/favorites', label: 'Favorites' }
				]} />
				
				<div className="destination-input">
					<Switch>
						<Route path="/lat-lng">
							<LocationInput className="location-input--lat-lng">
								<input type="text" placeholder="Latitude" />
								<input type="text" placeholder="Longitude" />
							</LocationInput>
						</Route>
						<Route path="/favorites">
							<FavoritesInput />
						</Route>
						<Route path="/">
							<LocationInput className="location-input--address">
								<input type="text" placeholder="Address" />
							</LocationInput>
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
