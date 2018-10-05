import types from './commonTypes';

/**
 * @description Creates and dispatches a loading action object
 *
 * @returns {object} The loading object
 */
export const loading = () => ({ type: types.LOADING });

/**
 * @description Creates and dispatches a user error action object
 *
 * @param {string} payload The error message
 *
 * @returns {object} The user error object
 */
export const userError = payload => ({ type: types.USER_ERROR, payload });

/**
 * @description Creates and dispatches a network error action object
 *
 * @param {string} payload The network error message
 *
 * @returns {object} The network error object
 */
export const networkError = payload => ({ type: types.NETWORK_ERROR, payload });

/**
 * @description Creates and dispatches a complete action object
 *
 * @returns {object} The complete object
 */
export const complete = () => ({ type: types.COMPLETE });
