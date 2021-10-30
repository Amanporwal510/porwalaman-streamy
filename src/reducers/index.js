import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import streamReducer from './streamReducer';
import authReducers from './authReducers';

export default combineReducers({
   streams: streamReducer,
   auth: authReducers,
   form: formReducer
});