import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../app/components/Footer';

describe('Footer component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
