import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/app/app';
import missions from './data/missions2';
import companies from './data/companies';
import workers from './data/workers';
import reducer from './reducers';
import { firewall, logger } from './middlewares';
import { arrayToObject } from './utils/lib';

const initialState = {
  missions,
  workers: arrayToObject(workers),
  companies: arrayToObject(companies),
  selectedMissions: {},
  alert: '',
  sort: {
    type: '',
    direction: true,
  },
};

const store = createStore(reducer, initialState, applyMiddleware(firewall, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
