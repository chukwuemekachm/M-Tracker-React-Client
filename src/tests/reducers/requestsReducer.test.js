import requestsReducer from '../../app/reducers/requestsReducer';
import types from '../../app/actions/commonTypes';

const payload = [];

describe('Tests requests reducer', () => {
  it('should return a new array of requests', () => {
    expect(requestsReducer({}, { type: types.VIEW_ALL_REQUESTS, payload }))
      .toEqual(
        {
          allRequests: [],
          filteredRequests: [],
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
  it('should return the state', () => {
    expect(requestsReducer({ allRequests: [] }, { type: types.SIGNUP }))
      .toEqual({ allRequests: [] });
  });
});
