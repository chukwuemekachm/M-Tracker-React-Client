import { combineReducers } from 'redux';
import auth from './authReducer';
import common from './commonReducer';

export default combineReducers({
  auth,
  common,
});
