import types from './commonTypes';


export const loading = () => ({ type: types.LOADING });

export const userError = payload => ({ type: types.USER_ERROR, payload });

export const networkError = payload => ({ type: types.NETWORK_ERROR, payload });

export const complete = () => ({ type: types.COMPLETE });
