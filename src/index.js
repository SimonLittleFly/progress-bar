import React from 'react';
import ReactDOM from 'react-dom';
import Header from './template/Header';
import Main from './template/Main';
import "./scss/main.scss";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<div id="container"><Header /><Main /></div>, document.getElementById('root'));

serviceWorker.unregister();
