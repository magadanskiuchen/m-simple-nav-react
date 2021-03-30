import React from 'react';

import classnames from 'classnames';

import '../styles/Message.scss';

export default function Message(props) {
	const getClassNames = () => {
		const classNames = [];
		
		if (props.error) {
			classNames.push('message--error');
		}
		
		return classNames.join(' ');
	};
	
	return <div className={classnames('message', getClassNames())}>{props.children}</div>;
}