import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './HomePage';
import configureStore from '../store/configureStore';
import '../assets/css/style.css';

const store = configureStore({});

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
