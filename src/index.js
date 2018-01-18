import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import missions from './data/missions2';
import reducer from './reducers';
// import logger from 'redux-logger';
import { firewall, logger } from './middlewares';

const initialState = {
  missions,
  people: [],
  blockedAction: undefined,
  showAlert: false,
};

const store = createStore(reducer, initialState, applyMiddleware(firewall, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
