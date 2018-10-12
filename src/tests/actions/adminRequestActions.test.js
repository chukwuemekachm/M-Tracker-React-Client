import mockFetch from 'fetch-mock';
import adminRequestActions, { modifyRequestStatus } from '../../app/actions/adminRequestActions';
import { mockStore } from '../../__mocks__/store';
import commonTypes from '../../app/actions/commonTypes';

const mockDetails = {
  requests: {
    allRequests: [
      { title: 'My request 1', request_id: 1 },
      { title: 'My request 2', request_id: 2 },
      { title: 'My request 3', request_id: 3 },
    ],
    currentRequest: {},
  },
  auth: {
    token: 'ey.bt6ygyt7V6TY8Hyg67y8.uyg76thuijikihnubg7u.jug6vtguvcrytfgyuhui',
  },
};
const getRequestsResponseSuccess = {
  status: 'success',
  code: 200,
  data: mockDetails.requests.allRequests,
  message: 'Requests retrieved successful',
};
const getRequestsResponseFailed = {
  status: 'fail',
  code: 401,
  message: 'Invalid token',
};
const putRequestResponseSuccess = {
  status: 'success',
  code: 200,
  data: { title: 'My request 1', request_id: 1, id: 1 },
  message: 'Requests modified successful',
};
const putRequestResponseFailed = {
  status: 'fail',
  code: 401,
  message: 'Invalid token',
};

describe('User requests action creators', () => {
  it('should dispatch LOADING, VIEW_ALL_REQUESTS_ADMIN and COMPLETE action types', (done) => {
    const store = mockStore(mockDetails);
    mockFetch.restore();
    mockFetch.getOnce('https://my-maintenance-tracker.herokuapp.com/api/v1/requests', getRequestsResponseSuccess);

    const expectedActions = [
      { type: commonTypes.LOADING },
      { type: commonTypes.VIEW_ALL_REQUESTS_ADMIN, payload: mockDetails.requests.allRequests },
      { type: commonTypes.COMPLETE },
    ];

    store.dispatch(adminRequestActions())
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(3);
        expect(actions).toEqual(expectedActions);
        done();
      });
  });

  it('should dispatch LOADING, and USER_ERROR action types', (done) => {
    const store = mockStore(mockDetails);
    mockFetch.restore();
    mockFetch.getOnce('https://my-maintenance-tracker.herokuapp.com/api/v1/requests', getRequestsResponseFailed);

    const expectedActions = [
      { type: commonTypes.LOADING },
      { type: commonTypes.USER_ERROR, payload: getRequestsResponseFailed.message },
    ];

    store.dispatch(adminRequestActions())
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(2);
        expect(actions).toEqual(expectedActions);
        done();
      });
  });

  it('should dispatch LOADING, and NETWORK_ERROR action types', (done) => {
    const store = mockStore(mockDetails);
    mockFetch.restore();
    mockFetch.getOnce('https://my-maintenance-tracker.herokuapp.com/api/v1/requests', 1);

    const expectedActions = [
      { type: commonTypes.LOADING },
      { type: commonTypes.NETWORK_ERROR },
    ];

    store.dispatch(adminRequestActions())
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(2);
        expect(actions).toEqual(expectedActions);
        done();
      });
  });

  it('should dispatch LOADING, UPDATE_REQUEST, COMPLETE and LOADING action types', (done) => {
    const store = mockStore(mockDetails);
    mockFetch.restore();
    mockFetch.putOnce('https://my-maintenance-tracker.herokuapp.com/api/v1/requests/1/approve', putRequestResponseSuccess);
    mockFetch.getOnce('https://my-maintenance-tracker.herokuapp.com/api/v1/requests', getRequestsResponseSuccess);

    const expectedActions = [
      { type: commonTypes.LOADING },
      { type: commonTypes.UPDATE_REQUEST, payload: { title: 'My request 1', request_id: 1, id: 1 } },
      { type: commonTypes.COMPLETE },
      { type: commonTypes.LOADING },
    ];

    store.dispatch(modifyRequestStatus(1, 'approve'))
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(4);
        expect(actions).toEqual(expectedActions);
        done();
      });
  });

  it('should dispatch LOADING, VIEW_ALL_REQUESTS_ADMIN and USER_ERROR action types', (done) => {
    const store = mockStore(mockDetails);
    mockFetch.restore();
    mockFetch.putOnce('https://my-maintenance-tracker.herokuapp.com/api/v1/requests/1/approve', putRequestResponseFailed);

    const expectedActions = [
      { type: commonTypes.LOADING },
      { type: commonTypes.USER_ERROR, payload: putRequestResponseFailed.message },
    ];

    store.dispatch(modifyRequestStatus(1, 'approve'))
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(2);
        expect(actions).toEqual(expectedActions);
        done();
      });
  });

  it('should dispatch LOADING and NETWORK_ERROR action types', (done) => {
    const store = mockStore(mockDetails);
    mockFetch.restore();
    mockFetch.putOnce('https://my-maintenance-tracker.herokuapp.com/api/v1/requests/1/approve', 1);

    const expectedActions = [
      { type: commonTypes.LOADING },
      { type: commonTypes.NETWORK_ERROR },
    ];

    store.dispatch(modifyRequestStatus(1, 'approve'))
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(2);
        expect(actions).toEqual(expectedActions);
        done();
      });
  });
});
