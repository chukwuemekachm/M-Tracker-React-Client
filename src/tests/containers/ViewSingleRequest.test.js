import React from 'react';
import { shallow } from 'enzyme';
import { ViewSingleRequestPage } from '../../app/containers/ViewSingleRequestPage';
import DefaultNavBar from '../../app/components/NavBar';
import SideNav from '../../app/components/SideNav';
import CreateRequestForm from '../../app/components/CreateRequest';
import ViewSingleRequest from '../../app/components/ViewSingleRequest';

const mockFunction = jest.fn();
mockFunction.mockResolvedValue({ status: 201 });
const props = {
  history: {
    push: mockFunction,
  },
  match: {
    params: { requestId: 20 },
  },
  createRequest: mockFunction,
  getRequests: mockFunction,
  viewRequest: mockFunction,
  deleteRequest: mockFunction,
  request: {
    title: 'New Request',
    description: 'The description of my test request',
    type: 'repair',
    status: 'approved',
    createdat: '2018-09-04T18:11:56.976Z',
  },
  requests: [{
    title: 'New Request',
    description: 'The description of my test request',
    type: 'repair',
    status: 'approved',
    createdat: '2018-09-04T18:11:56.976Z',
  },
  {
    title: 'New Request',
    description: 'The description of my test request',
    type: 'repair',
    status: 'approved',
    createdat: '2018-09-04T18:11:56.976Z',
  }],
};

describe('View single request componenet', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<ViewSingleRequestPage {...props} />);
    expect(wrapper.find(DefaultNavBar)).toHaveLength(1);
    expect(wrapper.find(SideNav)).toHaveLength(1);
    expect(wrapper.find(CreateRequestForm)).toHaveLength(1);
    expect(wrapper.find(ViewSingleRequest)).toHaveLength(1);
  });
});
