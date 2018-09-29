/**
 * @description This module helps to persist state to the localStorage
 * As well as retrieves persisted state from the localStorage to load the app
 */

/**
 * @description Saves the state of the store to the localStorage
 *
 * @param {Object} state The state to be saved to the localStorage
 */
export const saveState = (state) => {
  const serialisedState = JSON.stringify(state);
  window.localStorage.setItem('m-tracker-react', serialisedState);
};

/**
 * @description Retrieves the state saved on the localStorage
 *
 * @returns {Object}
 */
export const loadState = () => {
  const state = window.localStorage.getItem('m-tracker-react');
  const parsedState = state !== null && state !== undefined ? JSON.parse(state) : undefined;
  if (parsedState) {
    parsedState.common.loading = false;
    parsedState.common.error = false;
  }
  return parsedState;
};

/**
 * @description Clears the state persisted on the localStorage
 */
export const clearState = () => {
  window.localStorage.removeItem('m-tracker-react');
};
