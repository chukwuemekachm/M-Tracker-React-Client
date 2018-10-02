import authReducer from '../../app/reducers/authReducer';
import types from '../../app/actions/commonTypes';

const payload = {
  data: { id: 1, firstname: 'Oliva', lastname: 'John' },
  token: 'yguwjernfuhikwer9werhrfgyjhqewfkdjo9weihjbhsgvg',
};

describe('Tests auth reducer', () => {
  it('should signup a user', () => {
    expect(authReducer({}, { type: types.SIGNUP, payload }))
      .toEqual({ user: payload.data, token: payload.token, authenticated: true });
  });

  it('should login a user', () => {
    expect(authReducer({}, { type: types.LOGIN, payload }))
      .toEqual({ user: payload.data, token: payload.token, authenticated: true });
  });

  it('should logout a user', () => {
    expect(authReducer({}, { type: types.LOGOUT }))
      .toEqual({
        user: {},
        token: '',
        authenticated: false,
      });
  });

  it('should return the state', () => {
    expect(authReducer({}, { type: types.CREATE_REQUEST }))
      .toEqual({});
  });
});
