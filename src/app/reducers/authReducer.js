import types from '../actions/commonTypes';

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
    default:
      return state;
  }
};

export default authReducer;
