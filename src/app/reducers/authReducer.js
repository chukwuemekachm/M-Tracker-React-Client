import types from '../actions/actionTypes';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN:
      return Object.assign({}, state);
    case types.SIGNUP:
      return Object.assign({}, state);
    default:
      return state;
  }
};

export default authReducer;
