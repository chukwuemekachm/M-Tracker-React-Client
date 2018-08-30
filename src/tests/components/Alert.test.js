import React from 'react';
import { shallow } from 'enzyme';
import Alert from '../../app/components/Alert';

describe('Tests Alert component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Alert message="test" backgroundColor="white" />);
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('p')).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
});
