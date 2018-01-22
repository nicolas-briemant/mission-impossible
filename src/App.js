import React from 'react';
import { connect } from 'react-redux';
import {
  selectMission,
  removeMission,
  removeSelectedMissions,
  toogleSortMissionsByNames,
  sortMissionsByNbAddendas,
} from './actions';
import Header from './components/header';
import Missions from './components/missions';
import { selectorMissions } from './selectors';

const App = props => (
  <div className="App">
    <Header {...props} />
    <Missions {...props} />
  </div>
);

const MapDispatchToProps = {
  selectMission,
  removeMission,
  removeSelectedMissions,
  toogleSortMissionsByNames,
  sortMissionsByNbAddendas,
};

const mapStateToProps = state => ({
  ...state,
  missions: selectorMissions(state),
});

export default connect(mapStateToProps, MapDispatchToProps)(App);
