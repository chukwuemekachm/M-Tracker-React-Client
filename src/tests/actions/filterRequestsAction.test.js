import filterRequests, { navigateFilter } from '../../app/actions/filterRequestsAction';
import types from '../../app/actions/commonTypes';

describe('Filter request action creator', () => {
  beforeAll(() => {
    window.location.assign = jest.fn();
    window.location.replace = jest.fn();
  });

  it('should return approved requests', () => {
    expect(filterRequests('approved')).toEqual({
      type: types.VIEW_APPROVED_REQUESTS,
    });
  });

  it('should return disapproved requests', () => {
    expect(filterRequests('disapproved')).toEqual({
      type: types.VIEW_DISAPPROVED_REQUESTS,
    });
  });

  it('should return resolved requests', () => {
    expect(filterRequests('resolved')).toEqual({
      type: types.VIEW_RESOLVED_REQUESTS,
    });
  });

  it('should return pending requests', () => {
    expect(filterRequests('pending')).toEqual({
      type: types.VIEW_PENDING_REQUESTS,
    });
  });

  it('should return all requests', () => {
    expect(filterRequests('gibbrish')).toEqual({
      type: types.VIEW_UNFILTERED_REQUESTS,
    });
  });
});

describe('Navigate filter', () => {
  it('should return a window redirect', () => {
    expect(navigateFilter('pending')).toEqual(
      window.location.assign('/dashboard?pending'),
    );
  });
});
