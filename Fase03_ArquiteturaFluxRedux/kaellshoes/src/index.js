import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import GlobalStyles from './styles/global';

ReactDOM.render(
    <Fragment>
        <App />
        <GlobalStyles />
    </Fragment>,
    document.getElementById('root')
);
