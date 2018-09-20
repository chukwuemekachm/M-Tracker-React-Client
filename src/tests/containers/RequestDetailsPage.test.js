import React from 'react';
import { shallow } from 'enzyme';
import { RequestDetailsPage } from '../../app/containers/RequestDetailsPage';
import RequestDetails from '../../app/components/RequestDetails';
import NavBar from '../../app/components/NavBar';
import SideNav from '../../app/components/SideNav';

const history = {
  push: jest.fn(),
};

const request = {
  id: 67,
  title: 'Bad Television',
  type: 'maintenance',
  description: 'Hey this is a new request updated',
  user_id: 3,
  status: 'pending',
  createdat: '2018-09-04T18:11:56.976Z',
  updatedat: '2018-09-04T18:12:12.109Z',
};

describe('Tests Request Details Page', () => {
  it('sholud render without errors', () => {
    const wrapper = shallow(<RequestDetailsPage
      history={history}
      isAuthenticated
      request={request}
      actions={{ _html: '<i class="ion"></i>' }}
    />);
    expect(wrapper.find('div')).toHaveLength(4);
    expect(wrapper.find('h2')).toHaveLength(1);
    expect(wrapper.find('i')).toHaveLength(1);
    expect(wrapper.find(NavBar)).toHaveLength(1);
    expect(wrapper.find(RequestDetails)).toHaveLength(1);
    expect(wrapper.find(SideNav)).toHaveLength(1);
  });
});
