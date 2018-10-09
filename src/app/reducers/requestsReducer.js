import types from '../actions/commonTypes';

/**
 * @description The initial state object shape of the requests reducer
 */
const initialState = {
  allRequests: [],
  currentFilter: 'all',
  filteredRequests: [],
  currentRequest: {},
};

/**
 * @description Handles the requests object of the state
 * Evaluates actions and returns a new state
 *
 * @param {object} state The state object of the redux store
 * @param {object} action The action object dispatched
 *
 * @returns {object}
 */
const requestsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.VIEW_ALL_REQUESTS:
      return {
        ...state,
        allRequests: [...action.payload],
        filteredRequests: [...action.payload],
      };
    case types.VIEW_ALL_REQUESTS_ADMIN:
      return {
        ...state,
        allRequests: action.payload.map(request => ({ ...request, id: request.request_id })),
        filteredRequests: action.payload.map(request => ({ ...request, id: request.request_id })),
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
            return { ...request, ...action.payload };
          }
          return request;
        }),
        filteredRequests: state.allRequests.map((request) => {
          if (request.id === action.payload.id) {
            return { ...request, ...action.payload };
          }
          return request;
        }),
        currentRequest: { ...state.currentRequest, ...action.payload },
      };
    default:
      return state;
  }
};

export default requestsReducer;
