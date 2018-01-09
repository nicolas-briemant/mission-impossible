import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';

import './App.css';
import Missions from './components/missions';
import { Header, HeaderLeft, HeaderRight } from './components/header';
import Logo from './components/header/logo';
import Menu from './components/header/menu';
import logo from './img/007.png';

const App = props => {
  return (
    <div className="App">
      <Header>
        <HeaderLeft>
          <Logo src={logo} alt="007" title="Missions Impossible" />
        </HeaderLeft>
        <HeaderRight>
          <Menu />
        </HeaderRight>
      </Header>
      <Missions mission={props.missions} />
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
