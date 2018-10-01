import React from 'react';
import { shallow } from 'enzyme';
import SideNav from '../../app/components/SideNav';

const requests = [
  { title: 'first request', status: 'approved', createdat: '2018-09-04T18:11:56.976Z' },
  { title: 'first request', status: 'disapproved', createdat: '2018-09-04T18:11:56.976Z' },
  { title: 'first request', status: 'resolved', createdat: '2018-09-04T18:11:56.976Z' },
  { title: 'first request', status: 'pending', createdat: '2018-09-04T18:11:56.976Z' },
];

describe('Side nav component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<SideNav requests={requests} />);
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find('li')).toHaveLength(6);
    expect(wrapper).toMatchSnapshot();
  });
});
