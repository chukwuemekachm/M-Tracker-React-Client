import types from './actionTypes';

export default {
  signup: payload => ({ type: types.SIGNUP, payload }),
  login: payload => ({ type: types.LOGIN, payload }),
};
