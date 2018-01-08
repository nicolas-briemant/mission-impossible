import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import missions from './data/missions2';

const data = {
  missions,
};

ReactDOM.render(<App {...data} />, document.getElementById('root'));
registerServiceWorker();
