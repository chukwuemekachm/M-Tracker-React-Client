import authReducer from '../app/reducers/authReducer';
import authActions from '../app/actions/authActions';

describe('Tests for authReducer', () => {
  it('should return a new state', () => {
    expect(authReducer({}, authActions.login)).toEqual({});
  });

  it('should return a new state', () => {
    expect(authReducer({}, authActions.signup)).toEqual({});
  });

  it('should return a new state', () => {
    expect(authReducer({}, { type: 'default' })).toEqual({});
  });
});
