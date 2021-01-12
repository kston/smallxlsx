import React from 'react';
import { withRouter } from 'react-router-dom';

import './card.style.scss';

function Card({ item }) {
	const { title, description, icon, backgroundColor, linkUrl } = item[0];
	const { history, match } = item[1];

	return (
		<div
			className='card'
			style={{
				background: backgroundColor,
			}}
			onClick={() => history.push(`${match.url}${linkUrl}`)}
		>
			<img className='icon' src={icon} alt='icon'></img>
			<h3>{title}</h3>
			<h4>{description}</h4>
		</div>
	);
}

export default withRouter(Card);
