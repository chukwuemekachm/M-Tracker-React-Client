import React from 'react';
import { shallow } from 'enzyme';
import RequestDetails from '../../app/components/RequestDetails';

describe('Tests Request Details component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<RequestDetails
      actions={{ _html: '<i class="ion"></i>' }}
      title='Bad laptop'
      type='maintenance'
      description='My laptop is bad and faulty'
      status='pending'
      createdat='2018-09-04T18:12:12.109Z'
    />);
    expect(wrapper.find('div')).toHaveLength(2);
    expect(wrapper.find('h3')).toHaveLength(1);
    expect(wrapper.find('h4')).toHaveLength(5);
    expect(wrapper.find('p')).toHaveLength(10);
    expect(wrapper.find('label')).toHaveLength(5);
  });
});
