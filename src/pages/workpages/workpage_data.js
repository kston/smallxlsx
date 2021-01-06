import Light from '../../assets/light.svg';
import Save from '../../assets/save.svg';
import Ok from '../../assets/ok.svg';
import Padlock from '../../assets/padlock.svg';
import Knife from '../../assets/knife.svg';
import Cloud from '../../assets/cloud.svg';
const WORKPAGE_DATA = {
	items: [
		{
			id: 1,
			title: ' Fácil e rápido!',
			description:
				'Escolher Arquivo para escolher um arquivo para enviar. Suas planilhas serão processadas na hora e estará pronto para baixar.',
			icon: Light,
		},

		{
			id: 2,
			title: 'Processo seguro',
			description:
				'Todos os seus arquivos  serão permanentemente excluídos do nosso servidor após uma hora.',
			icon: Save,
		},

		{
			id: 3,
			title: 'Disponível para todos os sistemas operacionais',
			description:
				'Processos o seu arquivo excel, não importa qual SO você esteja usando - Windows, Mac ou Linux.',
			icon: Ok,
		},

		{
			id: 4,
			title: 'Planilha na Hora!',
			description:
				'Seu arquivo Excel é gerado rapidamente utilizando-se ajustes automáticos. O XLS gerado ficará exatamente como você quer, sem a necessidade de escolher entre opções complexas!',
			icon: Padlock,
		},

		{
			id: 5,
			title: 'Planilha com um clique!',
			description:
				'Basta enviar o arquivo, nós o processamos e os nossos servidores fazem o resto. Podemos deixar isso ainda mais fácil?',
			icon: Knife,
		},
		{
			id: 6,
			title: 'Conversão na nuvem',
			description:
				'Todo processo acontece na nuvem e não usa qualquer capacidade do seu computador. Não é legal?',
			icon: Cloud,
		},
	],
};

export default WORKPAGE_DATA;
