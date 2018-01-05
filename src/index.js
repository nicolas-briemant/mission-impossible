import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import missions from './data/missions2';

const datas = {
  missions,
};

ReactDOM.render(<App {...datas} />, document.getElementById('root'));
registerServiceWorker();
