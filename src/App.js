import React from 'react';
import { connect } from 'react-redux';
import { Header, HeaderLeft, HeaderRight, Title, Menu } from './components/app';
import Missions from './components/missions';
import { removeMission, removeMissions, toggleMission } from './actions';

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

const mapDispatchToProps = { removeMission, removeMissions, toggleMission };
const mapStateToProps = (state) => state;

export default connect(mapStateToProps, mapDispatchToProps)(App);
