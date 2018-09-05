import requestsReducer from '../../app/reducers/requestsReducer';
import types from '../../app/actions/commonTypes';

const payload = [];

describe('Tests requests reducer', () => {
  it('should return a new array of requests', () => {
    expect(requestsReducer([], { type: types.VIEW_ALL_REQUESTS, payload }))
      .toEqual([]);
  });
});
