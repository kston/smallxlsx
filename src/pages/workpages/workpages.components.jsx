import WorkpageDesription from '../../components/worpage_description/workpage_description.component';
import workdata from './workpage_data';
import WorkpageInstruction from '../../components/workpage_instruction/workpage_instruction.component';
import UploadContainerComponent from '../../components/upload_container/upload_container.component';
import './workpages.style.scss';

function Workpages() {
	return (
		<div className='workpages'>
			<div className='navpath'></div>

			<div className='upload_container'>
				<UploadContainerComponent />
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
}

export default Workpages;
