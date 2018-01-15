import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Missions from './components/missions';
import { Header, HeaderLeft, HeaderRight, HeaderCenter } from './components/header';
import { Title, Logo, Menu } from './components/app/';
import * as actions from './actions';
import connect from './connect';

const App = ({ missions, removeMission, toggleMission, removeMissions }) => (
  <div>
    <Header>
      <HeaderLeft>
        <Logo />
      </HeaderLeft>
      <HeaderCenter>
        <Title />
      </HeaderCenter>
      <HeaderRight>
        <Menu />
      </HeaderRight>
    </Header>
    <Missions
      missions={missions}
      removeMission={removeMission}
      toggleMission={toggleMission}
      removeMissions={removeMissions}
    />
  </div>
);

const mapDispatchToProps = dispatch => ({
  removeMission: missionId => dispatch(actions.removeMission(missionId)),
  toggleMission: missionId => dispatch(actions.toggleMission(missionId)),
  removeMissions: () => dispatch(actions.removeMissions()),
});

App.propTypes = {
  missions: PropTypes.array,
  removeMission: PropTypes.func.isRequired,
  toggleMission: PropTypes.func.isRequired,
  removeMissions: PropTypes.func.isRequired,
};

export default connect(mapDispatchToProps)(App);
