import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/app/app';
import missions from './data/missions2';
import reducer from './reducers';
// import Provider from './provider';
// import { createStore } from './store';
// import { logger } from './middlewares';

const initialState = {
  missions,
  selectedMissions: {},
  people: {},
};

const store = createStore(reducer, initialState /*applyMiddleware(logger)*/);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
