import Merge from '../../assets/merge.svg';
import Split from '../../assets/scissors.svg';
import MergeFiles from '../../assets/compartilhamento-de-arquivos.svg';
const CARDS_DATA = {
	mergeFiles: {
		id: 1,
		title: 'Unir Arquivos',
		description: 'Junte arquivos xlsx em apenas um arquivo.',
		icon: MergeFiles,
		backgroundColor: '#9E0CF7',
		linkUrl: 'mergefiles',
	},

	mergeSheet: {
		id: 2,
		title: 'Unir Planilha',
		description: 'Una cada aba do seu arquivo excel  em um arquivo xlsx.',
		icon: Merge,
		backgroundColor: '#B7FC2B',
		linkUrl: 'mergesheet',
	},
	slitsheet: {
		id: 3,
		title: 'Dividir Planilha',
		description:
			'Extraia cada aba do seu arquivo excel e gere um arquivo xlsx para cada.',
		icon: Split,
		backgroundColor: '#602bfc',
		linkUrl: 'slitsheet',
	},
};

export default CARDS_DATA;
