import React from 'react';
import '@blueprintjs/core/dist/blueprint.css';

import PropTypes from 'prop-types';
import { Header, HeaderLeft, HeaderRight } from './components/header';
import { Menu } from './components/menu';
import { Title } from './components/title';
import Missions from './components/missions/index';
import {
  removeMission as removeMissionAction,
  toggleMission as toggleMissionAction,
  removeMissions as removeMissionsAction,
} from './actions';
import './App.css';
import connect from './connect';

const App = ({ missions, removeMission, removeMissions, toggleMission }) => (
  <div>
    <Header>
      <HeaderLeft>
        <Title />
      </HeaderLeft>
      <HeaderRight>
        <Menu />
      </HeaderRight>
    </Header>
    <Missions
      missions={missions}
      removeMission={removeMission}
      removeMissions={removeMissions}
      toggleMission={toggleMission}
    />
  </div>
);
App.propTypes = {
  missions: PropTypes.array,
  removeMission: PropTypes.func,
  removeMissions: PropTypes.func,
  toggleMission: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  removeMission: missionId => dispatch(removeMissionAction(missionId)),
  toggleMission: missionId => dispatch(toggleMissionAction(missionId)),
  removeMissions: () => dispatch(removeMissionsAction()),
});

export default connect(mapDispatchToProps)(App);
