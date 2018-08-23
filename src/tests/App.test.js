import React from 'react';
import { shallow } from 'enzyme';
import App from '../app/containers/App';

describe('App component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
