import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
	return <header className="header">
		<nav>
			<ul>
				{props.links.map(l => <Link to={l.url}>{l.label}</Link> )}
			</ul>
		</nav>
	</header>;
}