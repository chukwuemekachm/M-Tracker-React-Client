import toastr from 'toastr';
import { userError, loading, networkError } from './commonActions';
import types from './commonTypes';

const baseUrl = 'https://my-maintenance-tracker.herokuapp.com/api/v1';

/**
 * @description Makes async ajax requests to sign up or login a user
 * Then dispatch actions to the store synchronously
 * Returns the http response object
 *
 * @param {object} payload The user details
 * @param {object} history The react-router-dom history object
 * @param {string} route The action route to use
 *
 * @returns {object} The http response object
 */
const authAsync = (payload, history, route) => (dispatch) => {
  dispatch(loading());
  return fetch(`${baseUrl}/auth/${route}`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
  }).then(response => response.json()).then((response) => {
    switch (response.code) {
      case 201:
        dispatch({ type: types.SIGNUP, payload: response });
        dispatch({ type: types.COMPLETE });
        history.push('/dashboard');
        toastr.success(response.message);
        break;
      case 200:
        dispatch({ type: types.LOGIN, payload: response });
        dispatch({ type: types.COMPLETE });
        history.push('/dashboard');
        toastr.success(response.message);
        break;
      default:
        toastr.error(response.message);
        dispatch(userError(response));
        break;
    }
    return response;
  }).catch(() => {
    dispatch(networkError());
  });
};

export default {
  authAsync,
  /**
   * @description Creates and dispatches a logout action
   *
   * @returns {object} The log out object
   */
  logout: () => ({ type: types.LOGOUT }),
};
