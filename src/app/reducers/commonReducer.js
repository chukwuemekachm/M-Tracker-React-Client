import types from '../actions/commonTypes';

const initialState = {
  loading: false,
  error: false,
  message: '',
};

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
