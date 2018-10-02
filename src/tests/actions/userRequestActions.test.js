import userRequestActions from '../../app/actions/userRequestActions';
import types from '../../app/actions/commonTypes';

describe('Tests common actions', () => {
  it('should return loading', () => {
    expect(userRequestActions.getSingleRequest(1))
      .toEqual({ type: types.VIEW_SINGLE_REQUEST, payload: 1 });
  });
});
