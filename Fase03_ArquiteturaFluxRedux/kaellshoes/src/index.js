import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import GlobalStyles from './styles/global';

ReactDOM.render(
    <Fragment>
        <App />
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
    </Fragment>,
    document.getElementById('root')
);
