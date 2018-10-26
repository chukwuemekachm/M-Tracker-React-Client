import React from 'react';
import { shallow } from 'enzyme';
import DeleteRequest from '../../app/components/DeleteRequest';

const props = {
  handleClick: jest.fn(),
};

describe('Delete request component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<DeleteRequest {...props} />);
    expect(wrapper).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
