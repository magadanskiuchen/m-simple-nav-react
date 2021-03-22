import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import LocationInput from './components/LocationInput';
import FavoritesInput from './components/FavoritesInput';

import './styles/App.scss';

function App() {
	return (
		<div className="app">
			<Router>
				<header className="header">
					<Navigation links={[
						{ url: '/', label: 'Address' },
						{ url: '/lat-lng', label: 'Lat/Lng' },
						{ url: '/favorites', label: 'Favorites' }
					]} />
				</header>
				
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
