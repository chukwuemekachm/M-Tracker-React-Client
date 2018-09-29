import types from './commonTypes';


export const loading = () => ({ type: types.LOADING });

export const userError = payload => ({ type: types.USER_ERROR, payload });

export const networkError = payload => ({ type: types.NETWORK_ERROR, payload });

export const complete = () => ({ type: types.COMPLETE });

export const toggleCreateModal = () => ({ type: types.TOGGLE_CREATE_MODAL });

export const toggleUpdateModal = () => ({ type: types.TOGGLE_UPDATE_MODAL });
