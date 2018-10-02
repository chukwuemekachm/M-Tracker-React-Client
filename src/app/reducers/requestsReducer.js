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
      return {
        ...state,
        allRequests: [...action.payload],
        filteredRequests: [...action.payload],
      };
    case types.VIEW_SINGLE_REQUEST:
      return {
        ...state,
        currentRequest: state.allRequests.find(request => request.id === action.payload),
      };
    case types.CREATE_REQUEST:
      return {
        ...state,
        allRequests: [...state.allRequests, action.payload],
      };
    case types.DELETE_REQUEST:
      return {
        ...state,
        allRequests: state.allRequests
          .filter(request => request.id !== Number.parseInt(action.payload, 10)),
        currentRequest: {},
      };
    default:
      return state;
  }
};

export default requestsReducer;
