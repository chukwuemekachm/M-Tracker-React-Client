import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './HomePage';
import configureStore from '../store/configureStore';
import '../assets/css/style.css';
import NotFound from './NotFound';

const store = configureStore({});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
