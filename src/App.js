import Header from './components/header/header.component.jsx';
import Homepade from './pages/Homepage/homepage.component.jsx';
import { Route, Switch, withRouter } from 'react-router-dom';
import Workpages from './pages/workpages/workpages.components.jsx';

const App = ({ match }) => {
	console.log(match.path);
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={Homepade} />
				<Route exact path={`${match.path}:id`} component={Workpages} />
			</Switch>

			{/* Footer */}
		</div>
	);
};

export default withRouter(App);
