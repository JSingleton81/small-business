import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import reducers from './reducers';
import initialState from './state';

const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;