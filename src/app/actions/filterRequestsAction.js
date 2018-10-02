import types from './commonTypes';

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

export const navigateFilter = filter => window.location.assign(`/dashboard?${filter}`);

export default filterRequests;
