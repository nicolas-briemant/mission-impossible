import React from 'react';
import { connect } from 'react-redux';
import {
  selectMission,
  removeMission,
  removeSelectedMissions,
  toogleSortMissionsByNames,
  sortMissionsByStartDate,
  sortMissionsByEndDate,
  filterMissionsInProgress,
  filterMissionsEnded,
} from './actions';
import Header from './components/header';
import Missions from './components/missions';
import { selector, getMissionsDatas } from './selectors';

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
  sortMissionsByStartDate,
  sortMissionsByEndDate,
  filterMissionsInProgress,
  filterMissionsEnded,
};

const mapStateToProps = state => {
  console.log(selector(state));
  console.log(getMissionsDatas(state));
  return {
    ...state,
    missions: selector(state),
  };
};

export default connect(mapStateToProps, MapDispatchToProps)(App);
