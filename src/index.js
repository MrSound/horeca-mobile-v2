import React from 'react';
import ReactDOM from 'react-dom';
// import './css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/font-awesome.css';
import './css/horeca.css';
import registerServiceWorker from './registerServiceWorker';

import SighIn from './components/authenticate/SignIn';

// console.log(process.env.NODE_ENV);
// console.log(process.env.PUBLIC_URL);

ReactDOM.render(<SighIn />, document.getElementById('root'));
registerServiceWorker();
