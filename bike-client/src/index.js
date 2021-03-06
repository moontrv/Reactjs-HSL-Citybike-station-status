import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/containers/App';
import * as serviceWorker from './serviceWorker';

import "./styles/bootstrap.min.css";
import "./styles/style.css";
import { Provider } from './components/Context';

ReactDOM.render(
    <Provider>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
