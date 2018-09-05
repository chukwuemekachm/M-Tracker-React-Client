import types from '../actions/commonTypes';

const initialState = [];

const requestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.VIEW_ALL_REQUESTS:
      return [...action.payload];
    default:
      return state;
  }
};

export default requestsReducer;
