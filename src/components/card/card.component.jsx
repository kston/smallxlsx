import React from 'react';
import './card.style.scss';
import { Link } from 'react-router-dom';

function Card(item) {
	const { title, description, icon, backgroundColor } = item.item;

	return (
		<Link
			to={`/${title.replace(/ /g, '').toLowerCase()}`}
			className='card'
			style={{
				background: backgroundColor,
			}}
		>
			<img className='icon' src={icon} alt='icon'></img>
			<h3>{title}</h3>
			<h4>{description}</h4>
		</Link>
	);
}

export default Card;
