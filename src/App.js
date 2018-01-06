import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import Missions from './components/missions';

const App = props => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to mission impossible</h1>
      </header>
      <Missions datas={props.missions} />
    </div>
  );
};

App.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default App;
