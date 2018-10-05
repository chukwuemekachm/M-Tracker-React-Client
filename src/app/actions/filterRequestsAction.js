import types from './commonTypes';

/**
 * @description Evaluates and dispatches a filter action object
 * Based on the filter parameter specified
 *
 * @param {string} filter The filter parameter from the url query string
 *
 * @returns {object} The filter object
 */
const filterRequests = (filter) => {
  switch (filter) {
    case 'pending':
      return { type: types.VIEW_PENDING_REQUESTS };
    case 'approved':
      return { type: types.VIEW_APPROVED_REQUESTS };
    case 'disapproved':
      return { type: types.VIEW_DISAPPROVED_REQUESTS };
    case 'resolved':
      return { type: types.VIEW_RESOLVED_REQUESTS };
    default:
      return { type: types.VIEW_UNFILTERED_REQUESTS };
  }
};

/**
 * @description Navigates the browser document to the route
 * Based on the filter parameter specified
 *
 * @param {string} filter The filter parameter from the url query string
 *
 * @returns {object}
 */
export const navigateFilter = filter => window.location.assign(`/dashboard?${filter}`);

export default filterRequests;
