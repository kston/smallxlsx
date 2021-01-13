import React from 'react';
import Excel from '../../assets/excel.svg';

import './upload_container.style.scss';

const UploadContainerComponent = ({ item }) => {
	const { title, description, icon, backgroundColor } = item;
	return (
		<div className='uploadContainer'>
			<div className='processName'>
				<div className='uploadContainerTitle'>
					<img alt='merge' src={icon}></img>
					<h2>{title}</h2>
				</div>

				<h3>{description}</h3>
			</div>
			<div
				className='uploadField'
				style={{
					background: backgroundColor,
				}}
			>
				<div className='uploadFiledDashed'>
					<img alt='merge' src={Excel}></img>
					<button
						className='fileInsertButton'
						onClick={() => document.querySelector('.insertInput').click()}
					>
						<input type='file' hidden className='insertInput'></input>

						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
							<path d='M13 12v-2h1v2h2v1h-2v2h-1v-2h-2v-1h2zm5 8H6V4H5v17h13v-1zm1 0v2H4V3h2V1h10l5 5v14h-2zM7 2v17h13V6l-4-4H7zm9 0l4 4h-4V2z'></path>
						</svg>
						<span>Escolher arquivo</span>
					</button>
					<div className='dragTitle'>ou solte arquivos Excel aqui</div>
				</div>
			</div>
		</div>
	);
};

export default UploadContainerComponent;
