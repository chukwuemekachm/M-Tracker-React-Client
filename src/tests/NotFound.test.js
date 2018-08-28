import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../app/containers/NotFound';
import NavBar from '../app/components/NavBar';

describe('Tests 404 NotFound component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper.find(NavBar)).toHaveLength(1);
    expect(wrapper.find('div')).toHaveLength(3);
    expect(wrapper.find('h1')).toHaveLength(1);
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
