import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Header.css';

export default function Header(props) {
	return <header className="header">
		<nav>
			<ul>
				{props.links.map(l => <Link key={l.url} to={l.url}>{l.label}</Link> )}
			</ul>
		</nav>
	</header>;
}