import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../app/components/NavBar';

describe('Navbar component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper).toMatchSnapshot();
    wrapper.findWhere(n => n.prop('id') === 'menu').simulate('click');
    wrapper.findWhere(n => n.prop('id') === 'menu').simulate('click');
  });
});
