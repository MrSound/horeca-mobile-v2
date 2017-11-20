import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { AUTH_USER } from './actions/types';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(
    reduxThunk,
)(createStore);

export const Store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
if (token) {
    Store.dispatch({ type: AUTH_USER });
}