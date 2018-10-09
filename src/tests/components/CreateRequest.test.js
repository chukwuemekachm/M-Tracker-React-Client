import React from 'react';
import { shallow } from 'enzyme';
import CreateRequest from '../../app/components/CreateRequest';

const mockFunctionSuccess = jest.fn();
mockFunctionSuccess.mockResolvedValue({ code: 201 });
const props = {
  request: {
    title: 'New Request',
    description: 'The description of my test request',
    type: 'repair',
    status: 'approved',
    createdat: '2018-09-04T18:11:56.976Z',
  },
  history: {
    push: jest.fn(),
  },
  create: mockFunctionSuccess,
};

describe('Create request component', () => {
  beforeAll(() => {
    window.document.getElementById = jest.fn().mockReturnValue({
      click: jest.fn(),
    });
  });

  it('should render without errors', () => {
    const wrapper = shallow(<CreateRequest {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle change in input fields', () => {
    const wrapper = shallow(<CreateRequest {...props} />);
    wrapper.find('[name="title"]').simulate('change', {
      target: { value: 'My test request' },
    });
    wrapper.find('[name="type"]').simulate('change', {
      target: { value: 'repair' },
    });
    wrapper.find('[name="description"]').simulate('change', {
      target: { value: 'My request description again' },
    });
  });

  it('should handle successful submit', () => {
    const wrapper = shallow(<CreateRequest {...props} />);
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
  });

  it('should handle unauthorized token submit', () => {
    const wrapper = shallow(
      <CreateRequest {...props} create={jest.fn().mockResolvedValue({ code: 401 })} />,
    );
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
  });

  it('should handle any submit response', () => {
    const wrapper = shallow(
      <CreateRequest {...props} create={jest.fn().mockResolvedValue({ code: 400 })} />,
    );
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
  });

  it('should handle bad network response', () => {
    const wrapper = shallow(
      <CreateRequest {...props} create={jest.fn().mockResolvedValue(false)} />,
    );
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
  });
});
