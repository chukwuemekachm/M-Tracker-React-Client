import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import DefaultHomePage from './HomePage';
import store from '../store/configureStore';
import '../assets/css/style.css';
import DefaultNotFound from './NotFound';
import DefaultSignup from './SignupPage';
import DefaultLogin from './LoginPage';
import DefaultDashboard from './Dashboard';
import DefaultViewSingleRequestPage from './ViewSingleRequestPage';
import DefaultPrivateRoute from './PrivateRoute';
import DefaultGuestRoute from './GuestRoute';

/**
 * @description The Main app component
 *
 * @returns {object}
 */
const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <DefaultGuestRoute path="/" exact component={DefaultHomePage} />
        <DefaultGuestRoute path="/signup" exact component={DefaultSignup} />
        <DefaultGuestRoute path="/login" exact component={DefaultLogin} />
        <DefaultPrivateRoute path="/dashboard" exact component={DefaultDashboard} />
        <DefaultPrivateRoute path="/:requestId" component={DefaultViewSingleRequestPage} />
        <Route component={DefaultNotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
