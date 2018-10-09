import React from 'react';
import { shallow } from 'enzyme';
import UserDetails from '../../app/components/UserDetails';

const props = {
  firstname: 'John',
  lastname: 'Doe',
  email: 'user@test.com',
};

describe('User Details component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<UserDetails {...props} />);
    expect(wrapper).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
