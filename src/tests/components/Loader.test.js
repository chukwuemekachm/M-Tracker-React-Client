import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../../app/components/Loader';

describe('Loader component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find('div')).toHaveLength(2);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
