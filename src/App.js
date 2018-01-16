import React from 'react';
import { connect } from 'react-redux';
import { selectMission, removeMission, removeSelectedMissions, blockAction } from './actions';
import Header from './components/missions/header';
import Missions from './components/missions/sections';

const App = props => (
  <div className="App">
    <Header {...props} />
    <Missions {...props} />
  </div>
);

const mapStateToProps = state => state;
const MapDispatchToProps = { selectMission, removeMission, removeSelectedMissions, blockAction };

export default connect(mapStateToProps, MapDispatchToProps)(App);
