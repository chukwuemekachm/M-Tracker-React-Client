import types from '../actions/commonTypes';
import { clearState } from '../store/persistState';

const initialState = {
  user: null,
  authenticated: false,
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGNUP:
      return {
        ...state,
        user: action.payload.data,
        token: action.payload.token,
        authenticated: true,
      };
    case types.LOGIN:
      return {
        ...state,
        user: action.payload.data,
        token: action.payload.token,
        authenticated: true,
      };
    case types.LOGOUT:
      clearState();
      return {
        ...state,
        user: {},
        token: '',
        authenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
