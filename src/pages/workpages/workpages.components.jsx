import React from 'react';
import { withRouter } from 'react-router-dom';
import WorkpageDesription from '../../components/worpage_description/workpage_description.component';
import cardsData from '../../components/cards/cards.data';
import workdata from './workpage_data';
import WorkpageInstruction from '../../components/workpage_instruction/workpage_instruction.component';
import UploadContainerComponent from '../../components/upload_container/upload_container.component';

import './workpages.style.scss';

const Workpages = ({ match }) => {
	return (
		<div className='workpages'>
			<div className='navpath'></div>

			<div className='upload_container'>
				{Object.keys(cardsData).map((key) => {
					if (key.toLocaleLowerCase() === match.params.id) {
						return (
							<UploadContainerComponent
								key={cardsData[key].id}
								item={cardsData[key]}
							/>
						);
					}
				})}
			</div>
			<div className='page_description'>
				{workdata.items.map((item) => (
					<WorkpageDesription key={item.id} item={item} />
				))}
			</div>
			<div className='page_instruction'>
				<WorkpageInstruction />
			</div>
		</div>
	);
};

export default withRouter(Workpages);
