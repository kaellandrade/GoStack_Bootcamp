import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import Header from './components/Header';
import './config/ReactotronConfig';
import store from './store';
import history from './services/history';

const App = () => (
    <Provider store={store}>
        <Router history={history}>
            <Header />
            <Routes />
        </Router>
    </Provider>
);

export default App;
