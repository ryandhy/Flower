import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './router/index.jsx';
// import Login from './pages/login.jsx';
// import Me from './pages/me.jsx';
import * as serviceWorker from './serviceWorker';

import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';

ReactDOM.render( <App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
