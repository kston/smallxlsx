import React from 'react';
import './workpage_description.style.scss';

function WorkpageDesription(item) {
	const { title, description, icon } = item.item;

	return (
		<div className='topic'>
			<div className='icon'>
				<img alt='light' src={icon}></img>
			</div>

			<h4> {title}</h4>
			<h5>{description}</h5>
		</div>
	);
}

export default WorkpageDesription;
