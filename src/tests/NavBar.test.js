import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { NavBar, mapStateToProps, mapDispatchToProps } from '../app/components/NavBar';

const mockState = {
  auth: {
    authenticated: true,
  },
};

describe('Navbar component', () => {
  it('should render without errors when a user is authenticated', () => {
    const props = {
      logout: jest.fn(),
      authenticated: true,
    };

    const wrapper = shallow(<NavBar {...props} />);
    wrapper.find('[name="logout"]').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without errors when a user is un-authenticated', () => {
    const props = {
      logout: jest.fn(),
      authenticated: false,
    };

    const wrapper = shallow(<NavBar {...props} />);
    wrapper.find('[name="login"]').simulate('click');
  });

  it('should mapDispatchToProps', () => {
    const sinonSpy = sinon.spy();
    const result = mapDispatchToProps(sinonSpy);
    result.logout();
    expect(sinonSpy.callCount).toBe(1);
  });

  it('should mapStateToProps', () => {
    expect(mapStateToProps(mockState)).toEqual({ authenticated: true });
  });
});
