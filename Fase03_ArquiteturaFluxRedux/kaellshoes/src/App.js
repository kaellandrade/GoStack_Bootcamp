import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import Header from './components/Header';

const App = () => (
    <Router>
        <Header/>
        <Routes />
    </Router>
);

export default App;
