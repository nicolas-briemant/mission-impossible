import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import missions from './data/missions2';

const initialState = {
  missions,
};

ReactDOM.render(<App {...initialState} />, document.getElementById('root'));
registerServiceWorker();
