import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Missions from './components/missions';
import { Header, HeaderLeft, HeaderRight } from './components/header';
import {
  removeMission as removeMissionAction,
  selectMission as selectMissionAction,
  removeSelectedMissions as removeSelectedMissionsAction,
} from './actions';
import Logo from './components/header/logo';
import Menu from './components/header/menu';
import logo from './img/007.png';
import connect from './connect';

const App = ({ missions, removeMission, selectMission, selectedMissions, removeSelectedMissions }) => (
  <div className="App">
    <Header>
      <HeaderLeft>
        <Logo src={logo} alt="007" title="Missions Impossible" />
      </HeaderLeft>
      <HeaderRight>
        <Menu />
      </HeaderRight>
    </Header>
    <Missions
      missions={missions}
      removeMission={removeMission}
      selectMission={selectMission}
      selectedMissions={selectedMissions}
      removeSelectedMissions={removeSelectedMissions}
    />
  </div>
);

App.propTypes = {
  missions: PropTypes.array,
  removeMission: PropTypes.func.isRequired,
  selectMission: PropTypes.func.isRequired,
  removeSelectedMissions: PropTypes.func.isRequired,
  selectedMissions: PropTypes.object.isRequired,
};

const mapDisPatchToProps = dispatch => ({
  removeMission: missionId => dispatch(removeMissionAction(missionId)),
  selectMission: missionId => dispatch(selectMissionAction(missionId)),
  removeSelectedMissions: selectedMissions => dispatch(removeSelectedMissionsAction(selectedMissions)),
});

export default connect(mapDisPatchToProps)(App);
