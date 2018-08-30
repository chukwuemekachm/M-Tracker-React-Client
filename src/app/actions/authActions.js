import { userError, loading } from './commonActions';
import types from './commonTypes';

const baseUrl = 'http://my-maintenance-tracker.herokuapp.com/api/v1';

const signupAsync = (payload, history) => (dispatch) => {
  dispatch(loading());
  return fetch(`${baseUrl}/auth/signup`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: { 'Content-Type': 'application/json' },
  }).then(response => response.json()).then((response) => {
    switch (response.code) {
      case 201:
        dispatch({ type: types.SIGNUP, payload: response });
        dispatch({ type: types.COMPLETE });
        history.push('/dashboard');
        break;
      default:
        dispatch(userError(response.message));
        break;
    }
    return response;
  }).catch(() => {
    dispatch(userError('Error connecting to our servers, we have logged a request with engineer'));
  });
};

export default {
  signupAsync,
};
