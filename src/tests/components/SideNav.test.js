import React from 'react';
import { shallow } from 'enzyme';
import SideNav from '../../app/components/SideNav';

const requests = [
  { title: 'first request', status: 'approved', createdat: '2018-09-04T18:11:56.976Z' },
  { title: 'first request', status: 'disapproved', createdat: '2018-09-04T18:11:56.976Z' },
  { title: 'first request', status: 'resolved', createdat: '2018-09-04T18:11:56.976Z' },
  { title: 'first request', status: 'pending', createdat: '2018-09-04T18:11:56.976Z' },
];
const mockFunction = jest.fn();

describe('Side nav component', () => {
  it('should render without errors when requests are present', () => {
    const wrapper = shallow(<SideNav requests={requests} handleNavigation={mockFunction} />);
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find('li')).toHaveLength(6);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render without errors when no request is present', () => {
    const wrapper = shallow(<SideNav requests={[]} handleNavigation={mockFunction} />);
    expect(wrapper.find('ul')).toHaveLength(1);
    expect(wrapper.find('li')).toHaveLength(6);
  });

  it('should handle all nav button click', () => {
    const wrapper = shallow(<SideNav requests={[]} handleNavigation={mockFunction} />);
    wrapper.find('[name="all"]').simulate('click');
  });

  it('should handle pending nav button click', () => {
    const wrapper = shallow(<SideNav requests={[]} handleNavigation={mockFunction} />);
    wrapper.find('[name="pending"]').simulate('click');
  });

  it('should handle resolved nav button click', () => {
    const wrapper = shallow(<SideNav requests={[]} handleNavigation={mockFunction} />);
    wrapper.find('[name="resolved"]').simulate('click');
  });

  it('should handle approved nav button click', () => {
    const wrapper = shallow(<SideNav requests={[]} handleNavigation={mockFunction} />);
    wrapper.find('[name="approved"]').simulate('click');
  });

  it('should handle disapproved nav button click', () => {
    const wrapper = shallow(<SideNav requests={[]} handleNavigation={mockFunction} />);
    wrapper.find('[name="disapproved"]').simulate('click');
  });
});
