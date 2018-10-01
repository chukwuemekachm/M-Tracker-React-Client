import React from 'react';
import { shallow } from 'enzyme';
import UserRequest from '../../app/components/UserRequest';

describe('Tests UserRequest component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<UserRequest
      title="New Request"
      status="approved"
      createdat="2018-09-04T18:11:56.976Z"
    />);
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find('li')).toHaveLength(3);
  });
});
