import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard } from '../../app/containers/Dashboard';

const mockFunction = jest.fn();
mockFunction.mockResolvedValue({
  status: 201,
});
const history = {
  push: mockFunction,
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

describe('Dashboard container', () => {
  it('should render without errors when props are truthy', () => {
    const wrapper = shallow(<Dashboard
      requests={requests}
      authenticated
      getRequests={mockFunction}
      history={history}
      createRequest={mockFunction}
      filter={mockFunction}
      filteredRequests={requests}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without errors when props are falsy', () => {
    const wrapper = shallow(<Dashboard
      requests={requests}
      authenticated={false}
      getRequests={mockFunction}
      history={history}
      createRequest={mockFunction}
      filter={mockFunction}
      filteredRequests={requests}
    />);
    expect(wrapper).toBeTruthy();
  });
});
