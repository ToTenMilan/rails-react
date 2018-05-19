import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.css'
import './index.css';

// import registerServiceWorker from './registerServiceWorker'; // conflict with rails router

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker(); // conflict with rails router
