import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from '../app/components/NavBar';

describe('Navbar component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<NavBar authenticated />);
    expect(wrapper).toMatchSnapshot();
  });
});
