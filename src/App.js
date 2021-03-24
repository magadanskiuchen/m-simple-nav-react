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
						<Route exact path="/">
							<LocationInput className="location-input--address">
								<input className="location-input__field" type="text" placeholder="Address" />
							</LocationInput>
						</Route>
						<Route exact path="/lat-lng">
							<LocationInput className="location-input--lat-lng">
								<input className="location-input__field" type="text" placeholder="Latitude" />
								<input className="location-input__field" type="text" placeholder="Longitude" />
							</LocationInput>
						</Route>
						<Route exact path="/favorites">
							<FavoritesInput />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
