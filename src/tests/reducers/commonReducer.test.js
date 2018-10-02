import commonReducer from '../../app/reducers/commonReducer';
import types from '../../app/actions/commonTypes';

describe('Tests common reducer', () => {
  it('should return an error message', () => {
    expect(commonReducer({}, { type: types.USER_ERROR, payload: 'Invalid email' }))
      .toEqual({ loading: false, error: true, message: 'Invalid email' });
  });

  it('should return a network error message', () => {
    expect(commonReducer({}, { type: types.NETWORK_ERROR }))
      .toEqual({ loading: false, error: true, message: 'Oops! we are having an issue connecting to our servers. Please try again later, this issue has been logged with our Engineers.' });
  });

  it('should return a loading request', () => {
    expect(commonReducer({}, { type: types.LOADING }))
      .toEqual({ loading: true, error: false, message: '' });
  });

  it('should return a complete request', () => {
    expect(commonReducer({}, { type: types.COMPLETE }))
      .toEqual({ loading: false, error: false, message: '' });
  });

  it('should return the state', () => {
    expect(commonReducer({}, { type: types.LOGIN }))
      .toEqual({});
  });
});
