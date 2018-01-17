import React from 'react';
import { connect } from 'react-redux';
import './app.css';
import Missions from '../missions';
import { Header, HeaderLeft, HeaderRight } from '../header';
import { removeMission, selectMission, removeSelectedMissions } from '../../actions';
import Logo from '../header/logo';
import Menu from '../header/menu';
import logo from '../../img/007.png';

const App = props => (
  <div className="App">
    <Header>
      <HeaderLeft>
        <Logo src={logo} alt="007" title="Missions Impossible" />
      </HeaderLeft>
      <HeaderRight>
        <Menu />
      </HeaderRight>
    </Header>
    <Missions {...props} />
  </div>
);

const mapDisPatchToProps = { removeMission, selectMission, removeSelectedMissions };

const mapStateToProps = state => state;

export default connect(mapStateToProps, mapDisPatchToProps)(App);
