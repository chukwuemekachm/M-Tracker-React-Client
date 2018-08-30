import {
  loading, userError, networkError, complete,
} from '../../app/actions/commonActions';
import types from '../../app/actions/commonTypes';

describe('Tests common actions', () => {
  it('should return loading', () => {
    expect(loading()).toEqual({ type: types.LOADING });
  });

  it('should return user error', () => {
    expect(userError('userError')).toEqual({ type: types.USER_ERROR, payload: 'userError' });
  });

  it('should return network error', () => {
    expect(networkError('networkError')).toEqual({ type: types.NETWORK_ERROR, payload: 'networkError' });
  });

  it('should return complete', () => {
    expect(complete()).toEqual({ type: types.COMPLETE });
  });
});
