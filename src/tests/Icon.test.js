import React from 'react';
import { shallow } from 'enzyme';
import Icon from '../app/components/Icon';

describe('Footer component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Icon title="Repair" icon="icon icon-md" />);
    expect(wrapper.find('div')).toHaveLength(2);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find('h4')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
