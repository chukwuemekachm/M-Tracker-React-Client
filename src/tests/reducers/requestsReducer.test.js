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
  it('should return a new object of request', () => {
    expect(requestsReducer(
      {
        allRequests: [
          { id: 1 }],
      }, { type: types.VIEW_SINGLE_REQUEST, payload: 1 },
    )).toEqual({
      allRequests: [{ id: 1 }],
      currentRequest: { id: 1 },
    });
  });
});
