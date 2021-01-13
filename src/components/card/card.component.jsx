import React from 'react';
import { withRouter } from 'react-router-dom';

import './card.style.scss';

const Card = ({ item }) => {
	const {
		title,
		description,
		icon,
		backgroundColor,
		linkUrl,
		history,
		match,
	} = item;

	return (
		<div
			className='card'
			style={{
				background: backgroundColor,
			}}
			onClick={() => history.push(`${match.url}${linkUrl}`)}
		>
			<img className='card-icon' src={icon} alt='icon'></img>
			<h3>{title}</h3>
			<h4>{description}</h4>
		</div>
	);
};

export default withRouter(Card);
