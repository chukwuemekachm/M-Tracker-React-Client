import React from 'react';
import { shallow } from 'enzyme';
import CreateRequest from '../../app/components/CreateRequest';

const mockCreate = jest.fn();
mockCreate.mockResolvedValueOnce({
  status: 201,
});
const history = {
  push: jest.fn(),
};

describe('Create request component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<CreateRequest
      create={mockCreate}
      history={history}
    />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('[name="title"]').simulate('change', {
      target: { value: 'Faulty equipment' },
    });
    wrapper.find('[name="type"]').simulate('change', {
      target: { value: 'repair' },
    });
    wrapper.find('[name="description"]').simulate('change', {
      target: { value: 'My equipment has been burnt' },
    });
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
  });
});
