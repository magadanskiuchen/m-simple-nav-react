import React from 'react';
import { Link } from 'react-router-dom';

class FavoritesInput extends React.Component {
	render() {
		return (
			<ul>
				<li>
					<Link to="/">Destination 1</Link>
				</li>
				<li>
					<Link to="/">Destination 2</Link>
				</li>
				<li>
					<Link to="/">Destination 3</Link>
				</li>
			</ul>
		);
	}
}

export default FavoritesInput;