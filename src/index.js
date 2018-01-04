import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import ReactDOM from 'react-dom';
import WebRoute from './WebRoutes';
import './components/css/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<WebRoute />, document.getElementById('root'));
registerServiceWorker();
