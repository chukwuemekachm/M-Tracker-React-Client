import types from '../actions/commonTypes';

/**
 * @description The initial state object shape of the common reducer
 */
const initialState = {
  loading: false,
  error: false,
  message: '',
};

/**
 * @description Handles the common object of the state
 * Evaluates actions and returns a new state
 *
 * @param {object} state The state object of the redux store
 * @param {object} action The action object dispatched
 *
 * @returns {object}
 */
const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload,
      };
    case types.NETWORK_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        message: 'Oops! we are having an issue connecting to our servers. Please try again later, this issue has been logged with our Engineers.',
      };
    case types.LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        message: '',
      };
    case types.COMPLETE:
      return {
        ...state,
        loading: false,
        error: false,
        message: '',
      };
    default:
      return state;
  }
};

export default commonReducer;
