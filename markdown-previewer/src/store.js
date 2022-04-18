import { reducer } from './reducers/reducer.js';
import { createStore } from 'redux';

const extenstion = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(reducer, extenstion);