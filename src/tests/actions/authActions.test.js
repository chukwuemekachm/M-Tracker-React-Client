import mockFetch from 'fetch-mock';
import authActions from '../../app/actions/authActions';
import commonTypes from '../../app/actions/commonTypes';
import { mockStore } from '../../__mocks__/store';

const history = { push: () => jest.fn() };
const user = {
  firstname: 'John',
  lastname: 'Doe',
  email: 'user@test.com',
  password: 'Password12',
};
const loginResponseSuccess = {
  status: 'success',
  code: 200,
  data: user,
  token: 'ey.BG67YUHybgygy7yubhgyt67ybhgft6789hbgty.f687uhgt67ughb7678YHBYg6b78uh.789UINHY687',
  message: 'Login successful',
};
const signupResponseSuccess = {
  status: 'success',
  code: 201,
  data: user,
  token: 'ey.BG67YUHybgygy7yubhgyt67ybhgft6789hbgty.f687uhgt67ughb7678YHBYg6b78uh.789UINHY687',
  message: 'Signup successful',
};
const loginResponseFailed = {
  status: 'error',
  code: 400,
  data: user,
  token: 'ey.BG67YUHybgygy7yubhgyt67ybhgft6789hbgty.f687uhgt67ughb7678YHBYg6b78uh.789UINHY687',
  message: 'Login failed',
};

describe('Auth action creators', () => {
  it('should dispatch LOADING, LOGIN and COMPLETE action types', () => {
    const store = mockStore({});
    mockFetch.restore();
    mockFetch.postOnce('https://my-maintenance-tracker.herokuapp.com/api/v1/auth/login', loginResponseSuccess);

    const expectedActions = [
      { type: commonTypes.LOADING },
      { type: commonTypes.LOGIN, payload: loginResponseSuccess },
      { type: commonTypes.COMPLETE },
    ];

    store
      .dispatch(authActions.authAsync({ email: user.email, password: user.password }, history, 'login'))
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(3);
        expect(actions).toEqual(expectedActions);
      });
  });

  it('should dispatch LOADING and USER_ERROR action types, ', () => {
    const store = mockStore({});
    mockFetch.restore();
    mockFetch.postOnce('https://my-maintenance-tracker.herokuapp.com/api/v1/auth/login', loginResponseFailed);

    const expectedActions = [
      { type: commonTypes.LOADING },
      { type: commonTypes.USER_ERROR, payload: loginResponseFailed.message },
    ];

    store
      .dispatch(authActions.authAsync({ email: user.email, password: undefined }, history, 'login'))
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(2);
        expect(actions).toEqual(expectedActions);
      });
  });

  it('should dispatch LOADING and USER_ERROR action types, ', () => {
    const store = mockStore({});
    mockFetch.restore();
    mockFetch.postOnce('https://my-maintenance-tracker.herokuapp.com/api/v1/auth/login', loginResponseFailed);

    const expectedActions = [
      { type: commonTypes.LOADING },
      { type: commonTypes.USER_ERROR, payload: loginResponseFailed.message },
    ];

    store
      .dispatch(authActions.authAsync({ email: user.email, password: undefined }, history, 'login'))
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(2);
        expect(actions).toEqual(expectedActions);
      });
  });

  it('should dispatch LOADING and SIGNUP and COMPLETE action types, ', () => {
    const store = mockStore({});
    mockFetch.restore();
    mockFetch.postOnce('https://my-maintenance-tracker.herokuapp.com/api/v1/auth/signup', signupResponseSuccess);

    const expectedActions = [
      { type: commonTypes.LOADING },
      { type: commonTypes.SIGNUP, payload: signupResponseSuccess },
      { type: commonTypes.COMPLETE },
    ];

    store
      .dispatch(authActions.authAsync({ email: user.email, password: undefined }, history, 'signup'))
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(3);
        expect(actions).toEqual(expectedActions);
      });
  });

  it('should dispatch LOADING and NETWORK_ERROR action types, ', () => {
    const store = mockStore({});
    mockFetch.restore();
    mockFetch.postOnce('https://my-maintenance-tracker.herokuapp.com/api/v1/auth/signup', 1);

    const expectedActions = [
      { type: commonTypes.LOADING },
      { type: commonTypes.NETWORK_ERROR },
    ];

    store
      .dispatch(authActions.authAsync({ email: user.email, password: undefined }, history, 'signup'))
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(2);
        expect(actions).toEqual(expectedActions);
      });
  });

  it('should dispatch LOGOUT action type', () => {
    const store = mockStore({});

    const expectedActions = [
      { type: commonTypes.LOGOUT },
    ];

    store
      .dispatch(authActions.logout());
    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions).toEqual(expectedActions);
  });
});
