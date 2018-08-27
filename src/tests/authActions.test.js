import authActions from '../app/actions/authActions';
import types from '../app/actions/actionTypes';

describe('Tests authActions', () => {
  it('should return a login payload', () => {
    expect(authActions.login('login')).toEqual({ type: types.LOGIN, payload: 'login' });
  });

  it('should return a signup payload', () => {
    expect(authActions.signup('signup')).toEqual({ type: types.SIGNUP, payload: 'signup' });
  });
});
