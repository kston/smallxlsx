import React from 'react';
import './cards.style.scss';
import cardsData from './cards.data';
import { withRouter } from 'react-router-dom';
import Card from '../card/card.component';

const Cards = (props) => {
	return (
		<div className='card_container'>
			<div className='cards'>
				{Object.keys(cardsData).map((key) => (
					<Card key={cardsData[key].id} item={[cardsData[key], props]} />
				))}
			</div>
		</div>
	);
};

export default withRouter(Cards);
