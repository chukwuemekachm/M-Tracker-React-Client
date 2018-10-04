import toastr from 'toastr';
import { userError, loading, networkError } from './commonActions';
import types from './commonTypes';

const baseUrl = 'https://my-maintenance-tracker.herokuapp.com/api/v1';

const getAllAsync = () => (dispatch, getState) => {
  const state = getState();
  const { token } = state.auth;
  dispatch(loading());
  return fetch(`${baseUrl}/users/requests`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    cache: 'reload',
  }).then(response => response.json()).then((response) => {
    switch (response.code) {
      case 200:
        dispatch({ type: types.VIEW_ALL_REQUESTS, payload: response.data });
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

const createRequestAsync = payload => (dispatch, getState) => {
  const state = getState();
  const { token } = state.auth;
  dispatch(loading());
  return fetch(`${baseUrl}/users/requests`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    cache: 'reload',
    body: JSON.stringify(payload),
  }).then(response => response.json()).then((response) => {
    switch (response.code) {
      case 201:
        dispatch({ type: types.CREATE_REQUEST, payload: response.data });
        dispatch({ type: types.COMPLETE });
        toastr.success(response.message);
        getAllAsync()(dispatch, getState);
        break;
      default:
        dispatch(userError(response.message));
        toastr.error(response.message);
        break;
    }
    return response;
  }).catch(() => {
    dispatch(networkError());
  });
};

const deleteRequestAsync = payload => (dispatch, getState) => {
  const state = getState();
  const { token } = state.auth;
  dispatch(loading());
  return fetch(`${baseUrl}/users/requests/${payload}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    cache: 'reload',
  }).then(response => response.json()).then((response) => {
    switch (response.code) {
      case 200:
        dispatch({ type: types.DELETE_REQUEST, payload });
        dispatch({ type: types.COMPLETE });
        toastr.success(response.message);
        getAllAsync()(dispatch, getState);
        break;
      default:
        dispatch(userError(response.message));
        toastr.error(response.message);
        break;
    }
    return response;
  }).catch(() => {
    dispatch(networkError());
  });
};

const updateRequestAsync = payload => (dispatch, getState) => {
  const state = getState();
  const { token } = state.auth;
  dispatch(loading());
  return fetch(`${baseUrl}/users/requests/${payload.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    cache: 'reload',
    body: JSON.stringify(payload),
  }).then(response => response.json()).then((response) => {
    switch (response.code) {
      case 200:
        dispatch({ type: types.UPDATE_REQUEST, payload: response.data });
        dispatch({ type: types.COMPLETE });
        toastr.success(response.message);
        getAllAsync()(dispatch, getState);
        break;
      default:
        dispatch(userError(response.message));
        toastr.error(response.message);
        break;
    }
    return response;
  }).catch(() => {
    dispatch(networkError());
  });
};

export default {
  getAllAsync,
  deleteRequest: payload => deleteRequestAsync(payload),
  getSingleRequest: payload => ({ type: types.VIEW_SINGLE_REQUEST, payload }),
  createRequest: payload => createRequestAsync(payload),
  updateRequest: payload => updateRequestAsync(payload),
};
