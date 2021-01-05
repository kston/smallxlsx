import React from 'react';
import './cards.style.scss';
import cardsData from './cards.data';
import Card from '../card/card.component';

const Cards = () => {
	return (
		<div className='card_container'>
			<div className='cards'>
				{cardsData.items.map((item) => (
					<Card key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

export default Cards;
