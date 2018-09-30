import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from '../../app/components/LoginForm';

const handleChange = jest.fn();
const handleSubmit = jest.fn();
const bindValues = {
  email: '',
  password: '',
};

describe('Login form component', () => {
  it('should render without errors and submit the form', () => {
    const wrapper = shallow(<LoginForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      bindValues={bindValues}
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
