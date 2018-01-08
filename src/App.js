import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import Missions from './components/missions';

const App = ({ missions }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" /> <h1 className="App-title">Welcome to mission impossible</h1>
    </header>
    <Missions missions={missions} />
  </div>
);

App.propTypes = {
  missions: PropTypes.array,
};

export default App;
