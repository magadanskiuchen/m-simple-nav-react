import React from 'react';

import '../styles/Compass.scss';

export default function Compass(props) {
	return <div className="compass" style={ {transform: `rotate(${props.bearing}deg)`} }></div>;
}