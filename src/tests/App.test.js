import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../app/containers/App';

describe('App component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Provider)).toHaveLength(1);
    expect(wrapper.find(Switch)).toHaveLength(1);
    expect(wrapper.find(BrowserRouter)).toHaveLength(1);
    expect(wrapper.find(Route));
    expect(wrapper).toMatchSnapshot();
  });
});
