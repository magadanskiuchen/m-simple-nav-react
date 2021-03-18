import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import AddressInput from './components/AddressInput';

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
						<Route path="/">
							<AddressInput />
						</Route>
						<Route path="/lat-lng">
							
						</Route>
						<Route path="/favorites">
							
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
