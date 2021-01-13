import React from 'react';
import './workpage_description.style.scss';

const WorkpageDesription = ({ item }) => {
	const { title, description, icon } = item;

	return (
		<div className='topic'>
			<div className='topic-icon'>
				<img alt='light' src={icon}></img>
			</div>

			<h4> {title}</h4>
			<h5>{description}</h5>
		</div>
	);
};

export default WorkpageDesription;
