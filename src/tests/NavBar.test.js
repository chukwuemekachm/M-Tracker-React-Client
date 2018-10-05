import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from '../app/components/NavBar';

describe('Navbar component', () => {
  it('should render without errors when a user is authenticated', () => {
    const wrapper = shallow(<NavBar authenticated logout={jest.fn()} />);
    wrapper.find('[name="logout"]').simulate('submit');
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without errors when a user is un-authenticated', () => {
    const wrapper = shallow(<NavBar authenticated={false} logout={jest.fn()} />);
    wrapper.find('[name="login"]').simulate('submit');
  });
});
