import authActions from '../../app/actions/authActions';
import commonTypes from '../../app/actions/commonTypes';

describe('Auth actions', () => {
  it('should logout a user', () => {
    expect(authActions.logout()).toEqual({
      type: commonTypes.LOGOUT,
    });
  });
});
