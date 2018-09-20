import types from '../actions/commonTypes';

const initialState = {
  allRequests: [],
  currentFilter: 'all',
  filteredRequests: [],
  currentRequest: {},
};

const requestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.VIEW_ALL_REQUESTS:
      return Object.assign(
        {},
        { ...state },
        {
          allRequests: [...action.payload],
          filteredRequests: [...action.payload],
        },
      );
    case types.VIEW_SINGLE_REQUEST:
      return Object.assign(
        {},
        { ...state },
        {
          currentRequest: state.allRequests.find(request => request.id === action.payload),
        },
      );
    default:
      return state;
  }
};

export default requestsReducer;
