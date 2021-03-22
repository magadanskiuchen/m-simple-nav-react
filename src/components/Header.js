import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.scss';

export default function Header(props) {
	return <header className="header">
		<nav>
			<ul>
				{props.links.map(l => <li><Link key={l.url} to={l.url}>{l.label}</Link></li> )}
			</ul>
		</nav>
	</header>;
}