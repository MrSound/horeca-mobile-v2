import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/font-awesome.css';
import './css/horeca.css';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Store } from './store';
import routes from './routes';

// console.log(process.env.NODE_ENV);
// console.log(process.env.PUBLIC_URL);

ReactDOM.render(
    <Provider store={Store}>
        {routes}
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
