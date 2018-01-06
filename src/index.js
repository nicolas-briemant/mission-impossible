import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import missions2 from './../src/data/missions2';

ReactDOM.render(<App missions={missions2} />, document.getElementById('root'));
registerServiceWorker();
