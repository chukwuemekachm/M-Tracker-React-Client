import React from 'react';
import { shallow } from 'enzyme';
import App from '../app/containers/App';
import HomePage from '../app/containers/HomePage';

describe('App component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(HomePage)).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
