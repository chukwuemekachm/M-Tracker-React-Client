import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '../app/containers/HomePage';
import Footer from '../app/components/Footer';
import Icon from '../app/components/Icon';
import DefaultNavBar from '../app/components/NavBar';

describe('Homepage component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper.find('h3')).toHaveLength(3);
    expect(wrapper.find('div')).toHaveLength(12);
    expect(wrapper.find(Footer)).toHaveLength(1);
    expect(wrapper.find(Icon)).toHaveLength(4);
    expect(wrapper.find(DefaultNavBar)).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
