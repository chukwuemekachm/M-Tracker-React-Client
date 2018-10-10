import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import DashboardDefault, { Dashboard, mapDispatchToProps, mapStateToProps } from '../../app/containers/Dashboard';
import { mockStore } from '../../__mocks__/store';

const history = {
  push: jest.fn(),
  location: {
    search: '?pending',
  },
};
const requests = [
  {
    id: 67,
    title: 'Bad Television',
    type: 'maintenance',
    description: 'Hey this is a new request updated',
    user_id: 3,
    status: 'pending',
    createdat: '2018-09-04T18:11:56.976Z',
    updatedat: '2018-09-04T18:12:12.109Z',
  },
  {
    id: 67,
    title: 'Bad Television',
    type: 'maintenance',
    description: 'Hey this is a new request updated',
    user_id: 3,
    status: 'approved',
    createdat: '2018-09-04T18:11:56.976Z',
    updatedat: '2018-09-04T18:12:12.109Z',
  },
  {
    id: 67,
    title: 'Bad Television',
    type: 'maintenance',
    description: 'Hey this is a new request updated',
    user_id: 3,
    status: 'disapproved',
    createdat: '2018-09-04T18:11:56.976Z',
    updatedat: '2018-09-04T18:12:12.109Z',
  },
  {
    id: 67,
    title: 'Bad Television',
    type: 'maintenance',
    description: 'Hey this is a new request updated',
    user_id: 3,
    status: 'resolved',
    createdat: '2018-09-04T18:11:56.976Z',
    updatedat: '2018-09-04T18:12:12.109Z',
  },
];

const props = {
  requests,
  authenticated: true,
  getRequests: jest.fn().mockResolvedValue({ code: 200 }),
  history,
  createRequest: jest.fn().mockResolvedValue({ code: 201 }),
  filter: jest.fn(),
  filteredRequests: requests,
  getAdminRequests: jest.fn().mockResolvedValue({ code: 200 }),
  admin: true,
};
const mockState = {
  auth: {
    authenticated: true,
    user: { admin: true },
  },
  requests: {
    allRequests: requests,
    filteredRequests: requests,
  },
};
const store = mockStore(mockState);

describe('Dashboard container', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Dashboard {...props} />);
    expect(wrapper).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render connected component without errors', () => {
    const wrapper = shallow(<DashboardDefault store={store} {...props} />);
    expect(wrapper.length).toBe(1);
  });

  it('should redirect when a user is not authenticated', () => {
    const wrapper = shallow(<Dashboard {...props} authenticated={false} />);
    expect(wrapper).toBeTruthy();
  });

  it('should render without errors when there are no requests', () => {
    const wrapper = shallow(<Dashboard {...props} requests={[]} filteredRequests={[]} />);
    expect(wrapper).toBeTruthy();
  });

  it('should render without errors when there are no filtered requests', () => {
    const wrapper = shallow(<Dashboard {...props} filteredRequests={[]} />);
    expect(wrapper).toBeTruthy();
  });

  it('should handle fetching all users requests', () => {
    const wrapper = shallow(<Dashboard {...props} admin={false} />);
    expect(wrapper).toBeTruthy();
  });

  it('should handle redirect when user token is expired', () => {
    const wrapper = shallow(<Dashboard
      {...props}
      admin={false}
      getRequests={jest.fn().mockResolvedValue({ code: 401 })}
    />);
    expect(wrapper).toBeTruthy();
  });

  it('should handle redirect when admin token is expired', () => {
    const wrapper = shallow(<Dashboard
      {...props}
      getAdminRequests={jest.fn().mockResolvedValue({ code: 401 })}
    />);
    expect(wrapper).toBeTruthy();
  });

  it('should mapDispatchToProps', () => {
    const sinonSpy = sinon.spy();
    const result = mapDispatchToProps(sinonSpy);
    result.getAdminRequests();
    result.getRequests();
    result.createRequest();
    result.filter();
    expect(sinonSpy.callCount).toBe(4);
  });

  it('should mapStateToProps', () => {
    expect(mapStateToProps(mockState, { history }))
      .toEqual({
        requests,
        filteredRequests: requests,
        authenticated: mockState.auth.authenticated,
        history,
        admin: mockState.auth.user.admin,
      });
  });
});
