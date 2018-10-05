import types from '../actions/commonTypes';
import { clearState } from '../store/persistState';

/**
 * @description The initial state object shape of the auth reducer
 */
const initialState = {
  user: null,
  authenticated: false,
  token: null,
};

/**
 * @description Handles the auth object of the state
 * Evaluates actions and returns a new state
 *
 * @param {object} state The state object of the redux store
 * @param {object} action The action object dispatched
 *
 * @returns {object}
 */
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
