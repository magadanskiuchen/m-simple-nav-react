import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LocationInput from './components/LocationInput';
import FavoritesInput from './components/FavoritesInput';

import './App.css';

function App() {
	return (
		<div className="app">
			<Router>
				<header className="header">
					<nav>
						<ul>
							<li>
								<Link to="/">Address</Link>
							</li>
							<li>
								<Link to="/lat-lng">Lat/Lng</Link>
							</li>
							<li>
								<Link to="/favorites">Favorites</Link>
							</li>
						</ul>
					</nav>
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
