import React from 'react';
import { shallow } from 'enzyme';
import Icon from '../app/components/Icon';

describe('Footer component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Icon title="Repair" icon="icon icon-md" />);
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('i')).toHaveLength(1);
    expect(wrapper.find('h3')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
