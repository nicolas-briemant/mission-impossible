import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import './App.css';
import logo from './data/logo.png';
import Missions from './components/missions/sections';
import { Header, HeaderLeft, HeaderMiddle, HeaderRight } from './components/missions/header';

const Logo = glamorous.img({
  width: 75,
});

const App = ({ missions }) => (
  <div className="App">
    <Header>
      <HeaderLeft>
        <h1 className="App-title">Welcome to mission impossible</h1>
      </HeaderLeft>
      <HeaderMiddle>
        <Logo alt="Logo" src={logo} />
      </HeaderMiddle>
      <HeaderRight>
        <ul>Missions</ul>
        <ul>Peoples</ul>
      </HeaderRight>
    </Header>
    <Missions missions={missions} />
  </div>
);

App.propTypes = {
  missions: PropTypes.array,
};

export default App;
