import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import logger from 'redux-logger';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import missions from './data/missions2';
import reducer from './reducers';
import { shallNotPass, logger } from './middlewares';
import { bigDragon } from './actions';

const initialState = {
  missions,
  people: [],
  blockedAction: undefined,
};

const store = createStore(reducer, initialState, applyMiddleware(shallNotPass, logger));

store.dispatch(bigDragon());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
