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

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={DefaultHomePage} />
        <Route path="/signup" exact component={DefaultSignup} />
        <Route path="/login" exact component={DefaultLogin} />
        <Route path="/dashboard" exact component={DefaultDashboard} />
        <Route component={DefaultNotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
