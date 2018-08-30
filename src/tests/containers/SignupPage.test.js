import React from 'react';
import { shallow } from 'enzyme';
import { SignupPage } from '../../app/containers/SignupPage';

const userErrorHandler = jest.fn();
const userSignup = jest.fn();
const history = {};

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
    expect(wrapper).toBeTruthy();
  });
});
