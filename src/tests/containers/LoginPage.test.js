import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../app/containers/LoginPage';
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

describe('LoginPage container', () => {
  it('should render without errors when props are falsy', () => {
    const wrapper = shallow(<LoginPage
      loading={false}
      userLogin={userLogin}
      history={history}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without errors when props are truthy', () => {
    const wrapper = shallow(<LoginPage
      loading
      userLogin={userLogin}
      history={history}
    />);
    expect(wrapper.find(LoginForm)).toHaveLength(1);
  });

  it('should handle form element changes', () => {
    const wrapper = shallow(<LoginPage
      loading={false}
      userLogin={userLogin}
      history={history}
    />);

    const instance = wrapper.instance();
    instance.handleChange(mockChangeEvent('email', user.email));
    instance.handleChange(mockChangeEvent('password', user.password));

    expect(instance.state.email).toEqual(user.email);
    expect(instance.state.password).toEqual(user.password);
  });

  it('should handle form submission', () => {
    const wrapper = shallow(<LoginPage
      loading={false}
      userLogin={userLogin}
      history={history}
    />);
    const instance = wrapper.instance();
    instance.state = user;
    expect(instance.state).toEqual(user);
    instance.handleSubmit(mockSubmitEvent);
  });
});
