import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import AddressInput from './components/AddressInput';
import LatLngInput from './components/LatLngInput';
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
							<LatLngInput />
						</Route>
						<Route path="/favorites">
							<FavoritesInput />
						</Route>
						<Route path="/">
							<AddressInput />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
