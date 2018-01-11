import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from './components/missions/header';
import Missions from './components/missions/sections';

const App = ({ missions }) => (
  <div className="App">
    <Header missions={missions} />
    <Missions missions={missions} />
  </div>
);

App.propTypes = {
  missions: PropTypes.array,
};

export default App;
