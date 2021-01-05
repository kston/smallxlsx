import React from 'react';

import './homepage.styles.scss';
import Cards from '../../components/cards/cards.componet';

const Homepage = () => {
	return (
		<div className='homepage-main'>
			<div className='homepage-main-head'>
				<h1> Tornamos o excel mais fácil</h1>
				<h2>Ferramentas de XLSX online fáceis de usar e multiuso</h2>
			</div>
			<Cards />
		</div>
	);
};

export default Homepage;
