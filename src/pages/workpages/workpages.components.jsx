import WorkpageDesription from '../../components/worpage_description/workpage_description.component';
import workdata from './workpage_data';
import './workpages.style.scss';

function Workpages() {
	return (
		<div className='workpages'>
			<div className='navpath'></div>
			<div className='main_head'></div>
			<div className='upload_container'></div>
			<div className='page_description'>
				{workdata.items.map((item) => (
					<WorkpageDesription key={item.id} item={item} />
				))}
			</div>
			<div className='page_instruction'></div>
		</div>
	);
}

export default Workpages;
