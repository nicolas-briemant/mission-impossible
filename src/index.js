import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { reduce } from 'ramda';
import './index.css';
import App from './App';
import missions from './data/missions2';
import companies from './data/companies';
import workers from './data/workers';
import reducer from './reducers';

const transform = (collection) => reduce(
  (memo, item) => ({ ...memo, [item.id]: item }),
  {},
  collection
);

const initialState = {
  missions,
  workers: transform(workers),
  companies: transform(companies),
};

const logger = createLogger({ collapsed: true });
const store = createStore(reducer, initialState, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
