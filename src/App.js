import React from 'react';
import { Header, HeaderLeft, HeaderRight, Title, Menu } from './components/app';
import Missions from './components/missions';
import * as actions from './actions';
import connect from './connect';

const App = (props) => (
  <div className="pt-dark">
    <Header isFixed>
      <HeaderRight>
        <Menu />
      </HeaderRight>
      <HeaderLeft>
        <Title />
      </HeaderLeft>
    </Header>
    <Missions {...props} />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  removeMission: (missionId) => dispatch(actions.removeMission(missionId)),
  removeMissions: () => dispatch(actions.removeMissions()),
  toggleMission: (missionId) => dispatch(actions.toggleMission(missionId)),
});

export default connect(mapDispatchToProps)(App);
