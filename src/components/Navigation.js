import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navigation.scss';

export default function Navigation(props) {
	return <nav>
		<ul className="header__list">
			{props.links.map(l => <li className="header__list_item"><Link key={l.url} to={l.url}>{l.label}</Link></li> )}
		</ul>
	</nav>;
}