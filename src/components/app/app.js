import React from 'react';
import { connect } from 'react-redux';
// import { createSelector } from 'reselect';
import { getSortedMissions } from '../../selectors';
import './app.css';
import Missions from '../missions';
import { Header, HeaderLeft, HeaderRight } from '../header';
import { removeMission, selectMission, removeSelectedMissions, blockedAction, mySortBy } from '../../actions';
import Logo from '../header/logo';
import HeaderMenu from '../header/menu';
import logo from '../../img/007.png';

const App = props => {
  return (
    <div>
      <Header>
        <HeaderLeft>
          <Logo src={logo} alt="007" title="Missions Impossible" />
        </HeaderLeft>
        <HeaderRight>
          <HeaderMenu {...props} />
        </HeaderRight>
      </Header>
      <Missions {...props} />
    </div>
  );
};

const mapDisPatchToProps = { removeMission, selectMission, removeSelectedMissions, blockedAction, mySortBy };

const mapStateToProps = state => ({
  ...state,
  missions: getSortedMissions(state),
});

export default connect(mapStateToProps, mapDisPatchToProps)(App);
