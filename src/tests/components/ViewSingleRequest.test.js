import React from 'react';
import { shallow } from 'enzyme';
import ViewSingleRequest from '../../app/components/ViewSingleRequest';

const request = {
  title: 'New Request',
  description: 'The description of my test request',
  type: 'repair',
  status: 'approved',
  createdat: '2018-09-04T18:11:56.976Z',
};

describe('View single request component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<ViewSingleRequest {...request} />);
    expect(wrapper.find('h6')).toHaveLength(5);
    expect(wrapper.find('strong')).toHaveLength(5);
    expect(wrapper.find('p')).toHaveLength(5);
  });
});
