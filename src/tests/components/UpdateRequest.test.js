import React from 'react';
import { shallow } from 'enzyme';
import UpdateRequestForm from '../../app/components/UpdateRequest';

const mockFunctionSuccess = jest.fn();
mockFunctionSuccess.mockResolvedValue({ code: 200 });
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
  update: mockFunctionSuccess,
};

describe('Update request component', () => {
  beforeAll(() => {
    window.getElementById = name => jest.fn(name).mockReturnValue({
      click: jest.fn(),
    });
  });

  it('should render without errors', () => {
    const wrapper = shallow(<UpdateRequestForm {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle change in input fields', () => {
    const wrapper = shallow(<UpdateRequestForm {...props} />);
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
    const wrapper = shallow(<UpdateRequestForm {...props} />);
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
  });

  it('should handle unathourized token submit', () => {
    const wrapper = shallow(
      <UpdateRequestForm {...props} update={jest.fn().mockResolvedValue({ code: 401 })} />,
    );
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
  });

  it('should handle any submit response', () => {
    const wrapper = shallow(
      <UpdateRequestForm {...props} update={jest.fn().mockResolvedValue({ code: 400 })} />,
    );
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
  });

  it('should handle bad network response', () => {
    const wrapper = shallow(
      <UpdateRequestForm {...props} update={jest.fn().mockResolvedValue(false)} />,
    );
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
  });
});
