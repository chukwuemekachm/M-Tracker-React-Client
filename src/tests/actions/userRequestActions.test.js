import mockFetch from 'fetch-mock';
import userRequestActions from '../../app/actions/userRequestActions';
import { mockStore } from '../../__mocks__/store';
import commonTypes from '../../app/actions/commonTypes';

const mockDetails = {
  requests: {
    allRequests: [
      { id: 1, title: 'My request 1' },
      { id: 2, title: 'My request 2' },
      { id: 3, title: 'My request 3' },
    ],
    currentRequest: {},
  },
  auth: {
    token: 'ey.bt6ygyt7V6TY8Hyg67y8.uyg76thuijikihnubg7u.jug6vtguvcrytfgyuhui',
  },
};
const request = {
  id: 1,
  title: 'Created request',
  description: 'Created request description',
  type: 'repair',
  createdat: '2018-09-04T18:11:56.976Z',
  updatedat: '2018-09-04T18:11:56.976Z',
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
const createRequestsResponseSuccess = {
  status: 'success',
  code: 201,
  data: request,
  message: 'Request created successfully',
};
const createRequestsResponseFailed = {
  status: 'error',
  code: 400,
  data: request,
  message: 'title is invalid',
};
const deleteRequestsResponseSuccess = {
  status: 'success',
  code: 200,
  message: 'Request deleted successfully',
};
const deleteRequestsResponseFailed = {
  status: 'fail',
  code: 404,
  message: 'Request not found',
};
const putRequestsResponseSuccess = {
  status: 'success',
  code: 200,
  data: request,
  message: 'Request updated successfully',
};


describe('User requests action creators', () => {
  it('should dispatch VIEW_SINGLE_REQUEST action types when getSingleRequest succeeds', () => {
    const store = mockStore(mockDetails);

    const expectedActions = [
      { type: commonTypes.VIEW_SINGLE_REQUEST, payload: 2 },
    ];

    store.dispatch(userRequestActions.getSingleRequest(2));
    const actions = store.getActions();
    expect(actions.length).toBe(1);
    expect(actions).toEqual(expectedActions);
  });
  it('should dispatch LOADING, VIEW_ALL_REQUESTS and COMPLETE action types when getAllAsync succeeds', (done) => {
    const store = mockStore(mockDetails);
    mockFetch.restore();
    mockFetch.getOnce('https://my-maintenance-tracker.herokuapp.com/api/v1/users/requests', getRequestsResponseSuccess);

    const expectedActions = [
      { type: commonTypes.LOADING },
      { type: commonTypes.VIEW_ALL_REQUESTS, payload: mockDetails.requests.allRequests },
      { type: commonTypes.COMPLETE },
    ];

    store.dispatch(userRequestActions.getAllAsync())
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(3);
        expect(actions).toEqual(expectedActions);
        done();
      });
  });

  it('should dispatch LOADING, and USER_ERROR action types when an error occurs during getAllAsync', (done) => {
    const store = mockStore(mockDetails);
    mockFetch.restore();
    mockFetch.getOnce('https://my-maintenance-tracker.herokuapp.com/api/v1/users/requests', getRequestsResponseFailed);

    const expectedActions = [
      { type: commonTypes.LOADING },
      { type: commonTypes.USER_ERROR, payload: getRequestsResponseFailed.message },
    ];

    store.dispatch(userRequestActions.getAllAsync())
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(2);
        expect(actions).toEqual(expectedActions);
        done();
      });
  });

  it('should dispatch LOADING, and NETWORK_ERROR action types when getAllAsync fails', (done) => {
    const store = mockStore(mockDetails);
    mockFetch.restore();
    mockFetch.getOnce('https://my-maintenance-tracker.herokuapp.com/api/v1/users/requests', 1);

    const expectedActions = [
      { type: commonTypes.LOADING },
      { type: commonTypes.NETWORK_ERROR },
    ];

    store.dispatch(userRequestActions.getAllAsync())
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(2);
        expect(actions).toEqual(expectedActions);
        done();
      });
  });

  it('should dispatch LOADING, CREATE_REQUEST, COMPLETE and LOADING action types when createRequest succeeds', (done) => {
    const store = mockStore(mockDetails);
    mockFetch.restore();
    mockFetch.postOnce('https://my-maintenance-tracker.herokuapp.com/api/v1/users/requests', createRequestsResponseSuccess);
    mockFetch.getOnce('https://my-maintenance-tracker.herokuapp.com/api/v1/users/requests', getRequestsResponseSuccess);

    const expectedActions = [
      { type: commonTypes.LOADING },
      { type: commonTypes.CREATE_REQUEST, payload: request },
      { type: commonTypes.COMPLETE },
      { type: commonTypes.LOADING },
    ];

    store.dispatch(userRequestActions.createRequest({
      title: request.title,
      type: request.type,
      description: request.description,
    }))
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(4);
        expect(actions).toEqual(expectedActions);
        done();
      });
  });

  it('should dispatch LOADING, and USER_ERROR action types when an error occurs during createRequest', (done) => {
    const store = mockStore(mockDetails);
    mockFetch.restore();
    mockFetch.postOnce('https://my-maintenance-tracker.herokuapp.com/api/v1/users/requests', createRequestsResponseFailed);

    const expectedActions = [
      { type: commonTypes.LOADING },
      { type: commonTypes.USER_ERROR, payload: createRequestsResponseFailed.message },
    ];

    store.dispatch(userRequestActions.createRequest({
      title: undefined,
      type: request.type,
      description: request.description,
    }))
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(2);
        expect(actions).toEqual(expectedActions);
        done();
      });
  });

  it('should dispatch LOADING, and NETWORK_ERROR action types when createRequest fails', (done) => {
    const store = mockStore(mockDetails);
    mockFetch.restore();
    mockFetch.postOnce('https://my-maintenance-tracker.herokuapp.com/api/v1/users/requests', 1);

    const expectedActions = [
      { type: commonTypes.LOADING },
      { type: commonTypes.NETWORK_ERROR },
    ];

    store.dispatch(userRequestActions.createRequest({
      title: undefined,
      type: request.type,
      description: request.description,
    }))
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(2);
        expect(actions).toEqual(expectedActions);
        done();
      });
  });

  it('should dispatch LOADING, DELETE_REQUEST and COMPLETE action types when deleteRequest succeeds', (done) => {
    const store = mockStore(mockDetails);
    mockFetch.restore();
    mockFetch.deleteOnce('https://my-maintenance-tracker.herokuapp.com/api/v1/users/requests/1', deleteRequestsResponseSuccess);
    mockFetch.getOnce('https://my-maintenance-tracker.herokuapp.com/api/v1/users/requests', getRequestsResponseSuccess);

    const expectedActions = [
      { type: commonTypes.LOADING },
      { type: commonTypes.DELETE_REQUEST, payload: 1 },
      { type: commonTypes.COMPLETE },
      { type: commonTypes.LOADING },
    ];

    store.dispatch(userRequestActions.deleteRequest(1))
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(4);
        expect(actions).toEqual(expectedActions);
        done();
      });
  });

  it('should dispatch LOADING and USER_ERROR action types when an error occurs during deleteRequest', (done) => {
    const store = mockStore(mockDetails);
    mockFetch.restore();
    mockFetch.deleteOnce('https://my-maintenance-tracker.herokuapp.com/api/v1/users/requests/1', deleteRequestsResponseFailed);

    const expectedActions = [
      { type: commonTypes.LOADING },
      { type: commonTypes.USER_ERROR, payload: deleteRequestsResponseFailed.message },
    ];

    store.dispatch(userRequestActions.deleteRequest(1))
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(2);
        expect(actions).toEqual(expectedActions);
        done();
      });
  });

  it('should dispatch LOADING and NETWORK_ERROR action types when deleteRequest fails', (done) => {
    const store = mockStore(mockDetails);
    mockFetch.restore();
    mockFetch.deleteOnce('https://my-maintenance-tracker.herokuapp.com/api/v1/users/requests/1', 1);

    const expectedActions = [
      { type: commonTypes.LOADING },
      { type: commonTypes.NETWORK_ERROR },
    ];

    store.dispatch(userRequestActions.deleteRequest(1))
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(2);
        expect(actions).toEqual(expectedActions);
        done();
      });
  });

  it('should dispatch LOADING, UPDATE_REQUEST, COMPLETE and LOADING action types when updateRequest succeeds', (done) => {
    const store = mockStore(mockDetails);
    mockFetch.restore();
    mockFetch.putOnce('https://my-maintenance-tracker.herokuapp.com/api/v1/users/requests/1', putRequestsResponseSuccess);
    mockFetch.getOnce('https://my-maintenance-tracker.herokuapp.com/api/v1/users/requests', getRequestsResponseSuccess);

    const expectedActions = [
      { type: commonTypes.LOADING },
      { type: commonTypes.UPDATE_REQUEST, payload: request },
      { type: commonTypes.COMPLETE },
      { type: commonTypes.LOADING },
    ];

    store.dispatch(userRequestActions.updateRequest({
      title: request.title,
      description: request.description,
      id: 1,
    }))
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(4);
        expect(actions).toEqual(expectedActions);
        done();
      });
  });

  it('should dispatch LOADING, USER_ERROR action types when an error occurs during updateRequest', (done) => {
    const store = mockStore(mockDetails);
    mockFetch.restore();
    mockFetch.putOnce('https://my-maintenance-tracker.herokuapp.com/api/v1/users/requests/10', deleteRequestsResponseFailed);

    const expectedActions = [
      { type: commonTypes.LOADING },
      { type: commonTypes.USER_ERROR, payload: deleteRequestsResponseFailed.message },
    ];

    store.dispatch(userRequestActions.updateRequest({
      title: request.title,
      description: request.description,
      id: 10,
    }))
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(2);
        expect(actions).toEqual(expectedActions);
        done();
      });
  });

  it('should dispatch LOADING, NETWORK_ERROR action types when updateRequest fails', (done) => {
    const store = mockStore(mockDetails);
    mockFetch.restore();
    mockFetch.putOnce('https://my-maintenance-tracker.herokuapp.com/api/v1/users/requests/10', 1);

    const expectedActions = [
      { type: commonTypes.LOADING },
      { type: commonTypes.NETWORK_ERROR },
    ];

    store.dispatch(userRequestActions.updateRequest({
      title: request.title,
      description: request.description,
      id: 10,
    }))
      .then(() => store.getActions())
      .then((actions) => {
        expect(actions.length).toBe(2);
        expect(actions).toEqual(expectedActions);
        done();
      });
  });
});
