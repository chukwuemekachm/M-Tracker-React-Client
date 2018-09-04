import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../app/containers/LoginPage';

const userLogin = jest.fn();
const history = {};

describe('LoginPage container', () => {
  it('should render without errors when props are falsy', () => {
    const wrapper = shallow(<LoginPage
      loading={false}
      error={false}
      message="test"
      userLogin={userLogin}
      history={history}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without errors when props are truthy', () => {
    const wrapper = shallow(<LoginPage
      loading
      error
      message="test"

      userLogin={userLogin}
      history={history}
    />);
    expect(wrapper).toBeTruthy();
  });
});
