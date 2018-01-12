import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import missions from './data/missions2';
import reducer from './reducers';
import { createStore } from './store';

const initialState = {
  missions,
  selectedMissions: {},
  people: {},
};

const store = createStore(reducer, initialState);

ReactDOM.render(<App store={store} />, document.getElementById('root'));
