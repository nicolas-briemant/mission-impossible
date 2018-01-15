import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from './components/missions/header';
import Missions from './components/missions/sections';
import * as create from './actions';
import connect from './connect';

const App = ({ missions, actions }) => (
  <div className="App">
    <Header missions={missions} />
    <Missions missions={missions} {...actions} />
  </div>
);

App.propTypes = {
  missions: PropTypes.array,
  actions: PropTypes.object,
};

const mapDispatchToProps = dispatch => ({
  selectMission: missionId => dispatch(create.selectMission(missionId)),
  removeMission: missionId => dispatch(create.removeMission(missionId)),
  removeSelectedMissions: () => dispatch(create.removeSelectedMissions()),
});

export default connect(mapDispatchToProps)(App);
