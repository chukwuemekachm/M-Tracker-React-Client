import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { LoginPage, mapDispatchToProps, mapStateToProps } from '../../app/containers/LoginPage';
import LoginForm from '../../app/components/LoginForm';

const userLogin = jest.fn();
const history = {};
const mockSubmitEvent = {
  preventDefault: jest.fn(),
};
const user = {
  email: 'user@test.com',
  password: 'Password1',
};
const mockChangeEvent = (name, value) => ({
  target: {
    name,
    value,
  },
});
const props = {
  loading: false,
  userLogin,
  history,
};
const mockState = {
  common: {
    loading: true,
  },
};

describe('LoginPage container', () => {
  it('should render without', () => {
    const wrapper = shallow(<LoginPage {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the loader without errors', () => {
    const wrapper = shallow(<LoginPage {...props} loading />);
    expect(wrapper.find(LoginForm)).toHaveLength(1);
  });

  it('should handle form element changes', () => {
    const wrapper = shallow(<LoginPage {...props} />);

    const instance = wrapper.instance();
    instance.handleChange(mockChangeEvent('email', user.email));
    instance.handleChange(mockChangeEvent('password', user.password));

    expect(instance.state.email).toEqual(user.email);
    expect(instance.state.password).toEqual(user.password);
  });

  it('should handle form submission', () => {
    const wrapper = shallow(<LoginPage {...props} />);

    const instance = wrapper.instance();
    instance.state = user;
    expect(instance.state).toEqual(user);
    instance.handleSubmit(mockSubmitEvent);
  });

  it('should mapDispatchToProps', () => {
    const sinonSpy = sinon.spy();
    const result = mapDispatchToProps(sinonSpy);
    result.userLogin();
    expect(sinonSpy.callCount).toBe(1);
  });

  it('should mapStateToProps', () => {
    expect(mapStateToProps(mockState, { history }))
      .toEqual({ loading: mockState.common.loading, history });
  });
});
