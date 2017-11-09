import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// console.log(process.env.NODE_ENV);
// console.log(process.env.PUBLIC_URL);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
