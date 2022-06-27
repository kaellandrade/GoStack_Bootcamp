import {Provider} from "react-redux";
import './config/ReactotronConfig';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Rotas from './routes/index';
import GlobalStyle from "./styles/globals";
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<Rotas/>
				<GlobalStyle/>
			</Router>
		</Provider>
	);
}

export default App;
