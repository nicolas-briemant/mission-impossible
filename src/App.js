import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from './components/missions/header';
import Missions from './components/missions/sections';
import * as createAction from './actions';
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
  selectMission: missionId => dispatch(createAction.selectMission(missionId)),
  removeMission: missionId => dispatch(createAction.removeMission(missionId)),
  removeSelectedMissions: () => dispatch(createAction.removeSelectedMissions()),
});

export default connect(mapDispatchToProps)(App);
