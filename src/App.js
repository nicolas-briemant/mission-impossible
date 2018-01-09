import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Missions from './components/missions/sections';
import Header from './components/missions/header';

const App = ({ missions }) => (
  <div className="App">
    <Header />
    <Missions missions={missions} />
  </div>
);

App.propTypes = {
  missions: PropTypes.array,
};

export default App;
