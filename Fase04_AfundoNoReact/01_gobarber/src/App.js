import React from 'react';
import './config/ReactotronConfig';
import {
    BrowserRouter as Router,
} from "react-router-dom";
import Rotas from './routes/index';
import GlobalStyle from "./styles/globals";

function App() {
	return (
        <Router>
            <Rotas/>
			<GlobalStyle/>
        </Router>
    );
}

export default App;
