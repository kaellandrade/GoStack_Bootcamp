import {Provider} from "react-redux";
import {PersistGate} from 'redux-persist/integration/react';
import './config/ReactotronConfig';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Rotas from './routes/index';
import GlobalStyle from "./styles/globals";
import {store, persistor} from './store/index';

/**
 * O conteúdo das rotas só será renderizado
 * após o persistGate buscar a informação do localstorage.
 * @returns {JSX.Element}
 * @constructor
 */
function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Router>
					<Rotas/>
					<GlobalStyle/>
				</Router>
			</PersistGate>
		</Provider>
	);
}

export default App;
