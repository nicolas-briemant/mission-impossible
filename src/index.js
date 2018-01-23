import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { firewall, logger } from './middlewares';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import missions from './data/missions2';
import companies from './data/companies';
import workers from './data/workers';
import reducer from './reducers';

const initialState = {
  missions,
  companies,
  workers,
  order: {
    type: undefined,
    direction: undefined,
  },
  filterMissions: {
    type: undefined,
  },
};

const store = createStore(reducer, initialState, applyMiddleware(firewall, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
