import toastr from 'toastr';
import { userError, loading, networkError } from './commonActions';
import types from './commonTypes';

const baseUrl = 'https://my-maintenance-tracker.herokuapp.com/api/v1';

/**
 * @description Makes an async ajax request to fetch the requests on the platform
 * Then dispatch actions to the store synchronously
 * Returns the http response object
 *
 * @returns {object} The http response object
 */
const getAllRequests = () => (dispatch, getState) => {
  const state = getState();
  const { token } = state.auth;
  dispatch(loading());
  return fetch(`${baseUrl}/requests`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    cache: 'reload',
  }).then(response => response.json()).then((response) => {
    switch (response.code) {
      case 200:
        dispatch({ type: types.VIEW_ALL_REQUESTS_ADMIN, payload: response.data });
        dispatch({ type: types.COMPLETE });
        break;
      default:
        dispatch(userError(response.message));
        break;
    }
    return response;
  }).catch(() => {
    dispatch(networkError());
  });
};

/**
 * @description Makes an async ajax request to modify the status the of a request on the platform
 * Then dispatch actions to the store synchronously
 * Returns the http response object
 *
 * @returns {object} The http response object
 */
export const modifyRequestStatus = (requestId, action) => (dispatch, getState) => {
  toastr.info('Requesting....');
  const state = getState();
  const { token } = state.auth;
  dispatch(loading());
  return fetch(`${baseUrl}/requests/${requestId}/${action}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    cache: 'reload',
  }).then(response => response.json()).then((response) => {
    switch (response.code) {
      case 200:
        dispatch({ type: types.UPDATE_REQUEST, payload: response.data });
        dispatch({ type: types.COMPLETE });
        toastr.success(response.message);
        getAllRequests()(dispatch, getState);
        break;
      default:
        dispatch(userError(response.message));
        break;
    }
    return response;
  }).catch(() => {
    dispatch(networkError());
  });
};

export default getAllRequests;
