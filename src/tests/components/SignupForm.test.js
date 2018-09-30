import React from 'react';
import { shallow } from 'enzyme';
import SignupForm from '../../app/components/SignupForm';

const handleChange = jest.fn();
const handleSubmit = jest.fn();
const bindValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
};

describe('Navbar component', () => {
  it('should render without errors and submit the form', () => {
    const wrapper = shallow(<SignupForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      bindValues={bindValues}
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

  it('should render without errors but form submission should fail', () => {
    const wrapper = shallow(<SignupForm
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      bindValues={bindValues}
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
