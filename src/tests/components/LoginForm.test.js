import React from 'react';
import { mount } from 'enzyme';
import LoginForm from '../../app/components/LoginForm';

const userLoginRequest = jest.fn();
const history = {};
describe('Login form component', () => {
  it('should render without errors and submit the form', () => {
    const wrapper = mount(<LoginForm
      userLoginRequest={userLoginRequest}
      history={history}
    />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('[name="email"]').simulate('change', {
      target: { value: 'john@gmail.com' },
    });
    wrapper.find('[name="password"]').simulate('change', {
      target: { value: 'Password' },
    });
    wrapper.find('form').simulate('submit');
  });
});
