import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

export const middlewares = [thunk];
export const mockStore = configureMockStore(middlewares);
