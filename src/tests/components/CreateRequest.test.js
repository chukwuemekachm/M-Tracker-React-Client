import React from 'react';
import { shallow } from 'enzyme';
import CreateRequest from '../../app/components/CreateRequest';
import Alert from '../../app/components/Alert';

const createMock = jest.fn();
createMock.mockResolvedValueOnce({
  code: 201,
});

const props = {
  toggleCreateModal: jest.fn(),
  create: createMock,
  error: true,
  loading: true,
  message: 'No message',
  history: {
    push: route => jest.fn(route),
  },
  getRequests: jest.fn(),
};

describe('Create Request component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<CreateRequest {...props} />);
    expect(wrapper.find('div')).toHaveLength(7);
    expect(wrapper.find('h4')).toHaveLength(1);
    expect(wrapper.find('span')).toHaveLength(1);
    expect(wrapper.find('img')).toHaveLength(1);
    expect(wrapper.find(Alert)).toHaveLength(1);
    expect(wrapper.find('button')).toHaveLength(1);
    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find('label')).toHaveLength(3);
    expect(wrapper.find('textarea')).toHaveLength(1);
    expect(wrapper.find('select')).toHaveLength(1);
    expect(wrapper.find('option')).toHaveLength(3);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('[name="title"]').simulate('change', {
      target: { value: 'My fan is burnt' },
    });
    wrapper.find('[name="type"]').simulate('change', {
      target: { value: 'repair' },
    });
    wrapper.find('[name="description"]').simulate('change', {
      target: { value: 'My fan got burnt due to a power surge' },
    });
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
  });
});
