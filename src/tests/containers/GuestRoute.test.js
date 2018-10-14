import React from 'react';
import { shallow } from 'enzyme';
import GuestRouteDefault, { GuestRoute } from '../../app/containers/GuestRoute';
import DefaultDashboard from '../../app/containers/Dashboard';
import { mockStore } from '../../__mocks__/store';

const props = {
  component: DefaultDashboard,
  authenticated: false,
  loading: false,
  message: '',
  error: false,
};
const store = mockStore({ auth: { authenticated: true } });

describe('Private Route', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<GuestRoute {...props} />);
    expect(wrapper).toBeTruthy();
  });

  it('should redirect without errors when user is not authenticated', () => {
    const wrapper = shallow(<GuestRoute component={DefaultDashboard} authenticated />);
    expect(wrapper).toBeTruthy();
  });

  it('should render connected component without errors', () => {
    const wrapper = shallow(<GuestRouteDefault store={store} component={DefaultDashboard} />);
    expect(wrapper).toBeTruthy();
  });
});
