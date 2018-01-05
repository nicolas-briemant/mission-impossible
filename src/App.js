import React from 'react';
import logo from './logo.svg';
import './App.css';
import Missions from './components/missions';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />{' '}
      <h1 className="App-title">Welcome to mission impossible</h1>
    </header>
    <Missions />
  </div>
);

export default App;
