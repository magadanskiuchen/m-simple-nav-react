import React from 'react';
import { NavLink } from 'react-router-dom';

import classnames from 'classnames';

import '../styles/Navigation.scss';

export default function Navigation(props) {
	return <nav className="navigation">
		<ul className="navigation__list">
			{props.links.map(l => <li key={l.url} className="navigation__list_item">
				<NavLink exact className="navigation__link btn" key={l.url + '-link'} to={l.url}>
					<span className={classnames('ico', `ico--${l.ico}`)}>{l.label}</span>
				</NavLink>
			</li> )}
		</ul>
	</nav>;
}