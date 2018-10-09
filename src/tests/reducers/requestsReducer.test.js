import requestsReducer from '../../app/reducers/requestsReducer';
import types from '../../app/actions/commonTypes';

const payload = [];
const allRequestsArray = [
  { status: 'resolved' },
  { status: 'approved' },
  { status: 'disapproved' },
  { status: 'pending' },
];
const updateRequestsArray = [
  { id: 1, status: 'approved' },
  { id: 2, status: 'pending' },
];

describe('Tests requests reducer', () => {
  it('should return a new array of user requests', () => {
    expect(requestsReducer({}, { type: types.VIEW_ALL_REQUESTS, payload }))
      .toEqual(
        {
          allRequests: [],
          filteredRequests: [],
        },
      );
  });

  it('should return a new array of admin requests', () => {
    expect(requestsReducer({}, { type: types.VIEW_ALL_REQUESTS_ADMIN, payload: [{ status: 'approved', request_id: 1 }, { status: 'approved', request_id: 2 }] }))
      .toEqual(
        {
          allRequests: [{ id: 1, status: 'approved', request_id: 1 }, { id: 2, status: 'approved', request_id: 2 }],
          filteredRequests: [{ id: 1, status: 'approved', request_id: 1 }, { id: 2, status: 'approved', request_id: 2 }],
        },
      );
  });

  it('should view a single request', () => {
    expect(requestsReducer(
      {
        allRequests: [
          { id: 1 },
        ],
      }, { type: types.VIEW_SINGLE_REQUEST, payload: 1 },
    )).toEqual({
      allRequests: [{ id: 1 }],
      currentRequest: { id: 1 },
    });
  });

  it('should create a new request', () => {
    expect(requestsReducer(
      {
        allRequests: [
          { id: 1 },
        ],
      }, { type: types.CREATE_REQUEST, payload: { id: 2 } },
    )).toEqual({
      allRequests: [{ id: 1 }, { id: 2 }],
    });
  });

  it('should delete a request', () => {
    expect(requestsReducer(
      {
        allRequests: [
          { id: 1 },
          { id: 2 },
          { id: 3 },
        ],
      }, { type: types.DELETE_REQUEST, payload: 2 },
    )).toEqual({
      allRequests: [{ id: 1 }, { id: 3 }],
      currentRequest: {},
    });
  });

  it('should return disapproved requests', () => {
    expect(requestsReducer(
      {
        allRequests: allRequestsArray,
      }, { type: types.VIEW_DISAPPROVED_REQUESTS },
    )).toEqual({
      allRequests: allRequestsArray,
      filteredRequests: [{ status: 'disapproved' }],
    });
  });

  it('should return approved requests', () => {
    expect(requestsReducer(
      {
        allRequests: allRequestsArray,
      }, { type: types.VIEW_APPROVED_REQUESTS },
    )).toEqual({
      allRequests: allRequestsArray,
      filteredRequests: [{ status: 'approved' }],
    });
  });

  it('should return resolved requests', () => {
    expect(requestsReducer(
      {
        allRequests: allRequestsArray,
      }, { type: types.VIEW_RESOLVED_REQUESTS },
    )).toEqual({
      allRequests: allRequestsArray,
      filteredRequests: [{ status: 'resolved' }],
    });
  });

  it('should return pending requests', () => {
    expect(requestsReducer(
      {
        allRequests: allRequestsArray,
      }, { type: types.VIEW_PENDING_REQUESTS },
    )).toEqual({
      allRequests: allRequestsArray,
      filteredRequests: [{ status: 'pending' }],
    });
  });

  it('should return unfiltered requests', () => {
    expect(requestsReducer(
      {
        allRequests: allRequestsArray,
      }, { type: types.VIEW_UNFILTERED_REQUESTS },
    )).toEqual({
      allRequests: allRequestsArray,
      filteredRequests: allRequestsArray,
    });
  });

  it('should update a request', () => {
    expect(requestsReducer(
      {
        allRequests: updateRequestsArray,
      }, { type: types.UPDATE_REQUEST, payload: { id: 2, status: 'approved' } },
    )).toEqual({
      allRequests: [{ id: 1, status: 'approved' }, { id: 2, status: 'approved' }],
      filteredRequests: [{ id: 1, status: 'approved' }, { id: 2, status: 'approved' }],
      currentRequest: { id: 2, status: 'approved' },
    });
  });

  it('should return the state', () => {
    expect(requestsReducer({ allRequests: [] }, { type: types.SIGNUP }))
      .toEqual({ allRequests: [] });
  });
});
