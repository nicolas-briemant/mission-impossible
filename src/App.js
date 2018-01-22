import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header, HeaderLeft, HeaderRight, Title, Menu } from './components/app';
import Missions from './components/missions';
import { removeMission, removeMissions, toggleMission } from './actions';
import { getEnhancedMissions } from './selectors';

const App = (props) => (
  <div className="pt-dark">
    <Header isFixed>
      <HeaderRight>
        <Menu />
      </HeaderRight>
      <HeaderLeft>
        <Title />
        {props.shallNotPassLog ? <code>shallNotPassLog: {props.shallNotPassLog}</code> : null }
      </HeaderLeft>
    </Header>
    <Missions {...props} />
  </div>
);

App.propTypes = {
  shallNotPassLog: PropTypes.string,
};

const mapDispatchToProps = { removeMission, removeMissions, toggleMission };
const mapStateToProps = (state) => ({
  ...state,
  missions: getEnhancedMissions(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
