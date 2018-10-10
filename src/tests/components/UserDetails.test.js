import React from 'react';
import { shallow } from 'enzyme';
import UserDetails from '../../app/components/UserDetails';

const props = {
  firstname: 'John',
  lastname: 'Doe',
  email: 'user@test.com',
};

describe('User Details component', () => {
  const wrapper = shallow(<UserDetails {...props} />);
  it('should render without errors', () => {
    expect(wrapper).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });

  it('should display correct user details', () => {
    expect(wrapper.find('#firstname').text()).toEqual(props.firstname);
    expect(wrapper.find('#lastname').text()).toEqual(props.lastname);
    expect(wrapper.find('#email').text()).toEqual(props.email);
  });
});
