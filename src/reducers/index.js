import {
    UNAUTH_USER,
  } from '../actions/types';
import authReducer from './Auth';
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux';
//import searchReducer from './Search';
//import shopReducer from './Shop';
//import commonReducer from './Common';
  
  const appReducer  = combineReducers({
    auth: authReducer,
    form: formReducer,     // <---- Mounted at 'form'
    // search: searchReducer,
    // shop: shopReducer,
    // common: commonReducer,
  });
  
  const rootReducer = (state, action) => {
    if (action.type === UNAUTH_USER) {
      state = undefined
    }
    return appReducer(state, action)
  }
  
  export default rootReducer;
  