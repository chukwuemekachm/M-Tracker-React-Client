import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import reducers from '../reducers';
import { loadState, saveState } from './persistState';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

const preloadedState = loadState();

const store = createStore(
  reducers,
  preloadedState,
  composeEnhancers(applyMiddleware(thunk)),
);

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 2000));

export default store;
