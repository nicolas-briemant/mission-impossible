import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Missions from './components/missions';
import { Header, HeaderLeft, HeaderRight, HeaderCenter } from './components/header'
import { Title, Logo, Menu } from './components/app/'

const App = ({ missions }) => (
  <div className="App">
  	<Header>
  		<HeaderLeft>
  			<Logo />
  		</HeaderLeft>
  		<HeaderCenter>
  			<Title />
  		</HeaderCenter>
  		<HeaderRight>
  			<Menu />
  		</HeaderRight>
    </Header>
    <Missions missions={missions} />
  </div>
);

App.propTypes = {
  missions: PropTypes.array
};

export default App;
