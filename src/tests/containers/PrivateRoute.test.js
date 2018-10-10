import React from 'react';
import { shallow } from 'enzyme';
import PrivateRouteDefault, { PrivateRoute } from '../../app/containers/PrivateRoute';
import DefaultDashboard from '../../app/containers/Dashboard';
import { mockStore } from '../../__mocks__/store';

const props = {
  component: DefaultDashboard,
  authenticated: true,
  loading: false,
  message: '',
  error: false,
};
const store = mockStore({ auth: { authenticated: true } });

describe('Private Route', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<PrivateRoute {...props} />);
    expect(wrapper).toBeTruthy();
  });

  it('should redirect without errors when user is not authenticated', () => {
    const wrapper = shallow(<PrivateRoute component={DefaultDashboard} authenticated={false} />);
    expect(wrapper).toBeTruthy();
  });

  it('should render connected component without errors', () => {
    const wrapper = shallow(<PrivateRouteDefault store={store} component={DefaultDashboard} />);
    expect(wrapper).toBeTruthy();
  });
});
