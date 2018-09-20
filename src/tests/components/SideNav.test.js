import React from 'react';
import { shallow } from 'enzyme';
import SideNav from '../../app/components/SideNav';

describe('Tests Side Nav component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<SideNav />);
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('h3')).toHaveLength(1);
    expect(wrapper.find('ul')).toHaveLength(3);
    expect(wrapper.find('li')).toHaveLength(8);
    expect(wrapper.find('i')).toHaveLength(10);
    expect(wrapper.find('h5')).toHaveLength(9);
    expect(wrapper.find('button')).toHaveLength(1);
  });
});
