import toastr from 'toastr';
import { userError, loading, networkError } from './commonActions';
import types from './commonTypes';

const baseUrl = 'https://my-maintenance-tracker.herokuapp.com/api/v1';

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
        dispatch(userError(response.message));
        break;
    }
    return response;
  }).catch(() => {
    dispatch(networkError());
  });
};

export default {
  authAsync,
  logout: () => ({ type: types.LOGOUT }),
};
