import React from 'react';
import { mount } from 'enzyme';
import SignupForm from '../../app/components/SignupForm';

const userError = jest.fn();
const userSignupRequest = jest.fn();
const history = {};
describe('Navbar component', () => {
  it('should render without errors and submit the form', () => {
    const wrapper = mount(<SignupForm
      userError={userError}
      userSignupRequest={userSignupRequest}
      history={history}
    />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('[name="firstname"]').simulate('change', {
      target: { value: 'john' },
    });
    wrapper.find('[name="lastname"]').simulate('change', {
      target: { value: 'doe' },
    });
    wrapper.find('[name="email"]').simulate('change', {
      target: { value: 'john@gmail.com' },
    });
    wrapper.find('[name="password"]').simulate('change', {
      target: { value: 'Password' },
    });
    wrapper.find('[name="confirmPassword"]').simulate('change', {
      target: { value: 'Password' },
    });
    wrapper.find('form').simulate('submit');
  });

  it('should render without errors but form submission  is not successful', () => {
    const wrapper = mount(<SignupForm
      userError={userError}
      userSignupRequest={userSignupRequest}
      history={history}
    />);
    wrapper.find('[name="firstname"]').simulate('change', {
      target: { value: 'john' },
    });
    wrapper.find('[name="lastname"]').simulate('change', {
      target: { value: 'doe' },
    });
    wrapper.find('[name="email"]').simulate('change', {
      target: { value: 'john@gmail.com' },
    });
    wrapper.find('[name="password"]').simulate('change', {
      target: { value: 'Password' },
    });
    wrapper.find('[name="confirmPassword"]').simulate('change', {
      target: { value: 'Password112' },
    });
    wrapper.find('form').simulate('submit');
  });
});
