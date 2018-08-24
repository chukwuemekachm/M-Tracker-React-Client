import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../app/containers/HomePage';
import Footer from '../app/components/Footer';
import Icon from '../app/components/Icon';
import NavBar from '../app/components/NavBar';

describe('Footer component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('h2')).toHaveLength(2);
    expect(wrapper.find('div')).toHaveLength(7);
    expect(wrapper.find(Footer)).toHaveLength(1);
    expect(wrapper.find(Icon)).toHaveLength(4);
    expect(wrapper.find(NavBar)).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
