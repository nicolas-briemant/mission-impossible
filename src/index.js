import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import missions from './data/missions2';
import workers from './data/workers';
import companies from './data/companies';
import reducer from './reducers';
import { firewall, logger } from './middlewares';
import { arrayToObjectWithId } from './utils';

const initialState = {
  missions,
  workers: arrayToObjectWithId(workers),
  companies: arrayToObjectWithId(companies),
  people: [],
  blockedAction: undefined,
  showAlert: false,
  sort: {
    type: '',
    direction: false,
  },
  filterMissions: {
    missionOpen: false,
    missionEnd: false,
  },
};

const store = createStore(reducer, initialState, applyMiddleware(firewall, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
