import React from 'react';
import { shallow } from 'enzyme';
import { SignupPage } from '../../app/containers/SignupPage';
import SignupForm from '../../app/components/SignupForm';

const userErrorHandler = jest.fn(() => true);
const userSignup = jest.fn();
const history = {};
const mockSubmitEvent = {
  preventDefault: jest.fn(),
};
const user = {
  firstname: 'John',
  lastname: 'Doe',
  email: 'user@test.com',
  password: 'Password1',
  confirmPassword: 'Password1',
};
const mockChangeEvent = (name, value) => ({
  target: {
    name,
    value,
  },
});

describe('SignupPage container', () => {
  it('should render without errors when props are falsy', () => {
    const wrapper = shallow(<SignupPage
      loading={false}
      error={false}
      message="test"
      userErrorHandler={userErrorHandler}
      userSignup={userSignup}
      history={history}
    />);
    expect(wrapper.find(SignupForm)).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without errors when props are truthy', () => {
    const wrapper = shallow(<SignupPage
      loading
      error
      message="test"
      userErrorHandler={userErrorHandler}
      userSignup={userSignup}
      history={history}
    />);
    expect(wrapper.find(SignupForm)).toHaveLength(1);
  });

  it('should handle password mismatch', () => {
    const wrapper = shallow(<SignupPage
      loading
      error
      message="test"
      userErrorHandler={userErrorHandler}
      userSignup={userSignup}
      history={history}
    />);
    const instance = wrapper.instance();
    instance.state.password = user.password;
    instance.state.confirmPassword = 'Mismatch1';
    instance.handleSubmit(mockSubmitEvent);
    expect(instance.handleSubmit(mockSubmitEvent)).toBeFalsy();
  });

  it('should handle form element changes', () => {
    const wrapper = shallow(<SignupPage
      loading
      error
      message="test"
      userErrorHandler={userErrorHandler}
      userSignup={userSignup}
      history={history}
    />);

    const instance = wrapper.instance();
    instance.handleChange(mockChangeEvent('email', user.email));
    instance.handleChange(mockChangeEvent('firstname', user.firstname));
    instance.handleChange(mockChangeEvent('lastname', user.lastname));
    instance.handleChange(mockChangeEvent('password', user.password));
    instance.handleChange(mockChangeEvent('confirmPassword', user.confirmPassword));

    expect(instance.state.email).toEqual(user.email);
    expect(instance.state.firstname).toEqual(user.firstname);
    expect(instance.state.lastname).toEqual(user.lastname);
    expect(instance.state.password).toEqual(user.password);
    expect(instance.state.confirmPassword).toEqual(user.confirmPassword);
  });

  it('should handle form submission', () => {
    const wrapper = shallow(<SignupPage
      loading
      error
      message="test"
      userErrorHandler={userErrorHandler}
      userSignup={userSignup}
      history={history}
    />);
    const instance = wrapper.instance();
    instance.state = user;
    expect(instance.state).toEqual(user);
    expect(instance.handleSubmit(mockSubmitEvent)).toBeTruthy();
  });
});
