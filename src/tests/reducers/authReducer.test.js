import authReducer from '../../app/reducers/authReducer';
import types from '../../app/actions/commonTypes';

const payload = {
  data: { id: 1, firstname: 'Oliva', lastname: 'John' },
  token: 'yguwjernfuhikwer9werhrfgyjhqewfkdjo9weihjbhsgvg',
};

describe('Tests auth reducer', () => {
  it('should return a signup payload', () => {
    expect(authReducer({}, { type: types.SIGNUP, payload }))
      .toEqual({ user: payload.data, token: payload.token, authenticated: true });
  });
});
