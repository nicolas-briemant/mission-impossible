import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import {logger} from 'redux-logger';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import missions from './../src/data/missions2';
import companies from './../src/data/companies';
import workers from './../src/data/workers';
import reducer from './reducers';
import { logger, fireWall } from './middlewares';
//import Provider from './provider';
//import { createStore } from './store';

const initialState = {
  missions,
  companies,
  workers,
  blockedAction: undefined,
  nameIsSorted: undefined,
  startDateIsSorted: undefined,
  endDateIsSorted: undefined,
};

const store = createStore(reducer, initialState, applyMiddleware(fireWall, logger));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
