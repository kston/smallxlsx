import React from 'react';
import './workpage_instruction.style.scss';
import Excel from '../../assets/excel.svg';

function WorkpageInstruction() {
	return (
		<div className='workpageInstruction'>
			<div className='instruction-icon'>
				<img alt='Excel' src={Excel}></img>
			</div>
			<div className='instruction-text'>
				<h2>Como alterar sua planilha Excel</h2>

				<ol>
					<li>
						<span>Arraste e solte seu arquivo Excel na área indicada.</span>
					</li>
					<li>
						<span>Aguarde enquanto a ferramenta processa a planilha.</span>
					</li>
					<li>
						<span>
							Na página de resultados, continue a modificar o arquivo de saída,
							se necessário.
						</span>
					</li>
					<li>
						<span>
							Caso contrário, baixe, compartilhe ou salve o arquivo no Dropbox
							ou no Google Drive.
						</span>
					</li>
				</ol>
			</div>
		</div>
	);
}

export default WorkpageInstruction;
