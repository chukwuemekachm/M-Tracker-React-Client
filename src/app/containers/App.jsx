import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './HomePage';
import store from '../store/configureStore';
import '../assets/css/style.css';
import NotFound from './NotFound';
import Signup from './SignupPage';
import Login from './LoginPage';
import Dashboard from './Dashboard';
import RequestDetailsPage from './RequestDetailsPage';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/login" exact component={Login} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/dashboard/:requestId" exact component={RequestDetailsPage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
