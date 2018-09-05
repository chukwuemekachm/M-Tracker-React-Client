import { combineReducers } from 'redux';
import auth from './authReducer';
import common from './commonReducer';
import requests from './requestsReducer';

export default combineReducers({
  auth,
  common,
  requests,
});
