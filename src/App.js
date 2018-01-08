import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import Missions from './components/missions';
import { Header, HeaderLeft, HeaderRight } from './components/header';

const App = ({ missions }) => (
  <div className="App">
    <Header>
      <HeaderLeft>
        <img src={logo} className="App-logo" alt="logo" />{' '}
        <h1 className="App-title">Welcome to mission impossible</h1>
      </HeaderLeft>
      <HeaderRight>
        <span>menu...</span>
      </HeaderRight>
    </Header>
    <Missions missions={missions} />
  </div>
);

App.propTypes = {
  missions: PropTypes.array,
};

export default App;
