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
    case types.VIEW_APPROVED_REQUESTS:
      return {
        ...state,
        filteredRequests: state.allRequests.filter(request => request.status === 'approved'),
      };
    case types.VIEW_DISAPPROVED_REQUESTS:
      return {
        ...state,
        filteredRequests: state.allRequests.filter(request => request.status === 'disapproved'),
      };
    case types.VIEW_RESOLVED_REQUESTS:
      return {
        ...state,
        filteredRequests: state.allRequests.filter(request => request.status === 'resolved'),
      };
    case types.VIEW_PENDING_REQUESTS:
      return {
        ...state,
        filteredRequests: state.allRequests.filter(request => request.status === 'pending'),
      };
    case types.VIEW_UNFILTERED_REQUESTS:
      return {
        ...state,
        filteredRequests: [...state.allRequests],
      };
    case types.UPDATE_REQUEST:
      return {
        ...state,
        allRequests: state.allRequests.map((request) => {
          if (request.id === action.payload.id) {
            return action.payload;
          }
          return request;
        }),
        filteredRequests: state.allRequests.map((request) => {
          if (request.id === action.payload.id) {
            return action.payload;
          }
          return request;
        }),
        currentRequest: action.payload,
      };
    default:
      return state;
  }
};

export default requestsReducer;
