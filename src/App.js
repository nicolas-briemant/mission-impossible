import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert } from '@blueprintjs/core';
import './App.css';
import Missions from './components/missions';
import { Header, HeaderLeft, HeaderRight, HeaderCenter } from './components/header';
import { Title, Logo, Menu } from './components/app/';
import { removeMission, removeMissions, toggleMission, hideAlert, sortName, sortAddenda } from './actions';
import { getSortByName, getSortByAddenda, getDataMissions } from './selectors';

const App = props => (
  <div>
    <Alert isOpen={props.showAlert} onConfirm={() => props.hideAlert()}>
      {"Vous n'avez pas la permission de faire cette action."}
    </Alert>
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
    <Missions {...props} />
  </div>
);

App.propTypes = {
  showAlert: PropTypes.bool.isRequired,
  hideAlert: PropTypes.func.isRequired,
};

const sortMissions = (state, missions) => {
  if (state.sortNameBool !== undefined) return getSortByName(missions, state.sortNameBool);
  else if (state.sortAddendaBool !== undefined) return getSortByAddenda(missions, state.sortAddendaBool);
  return missions;
};

const mapDispatchToProps = { removeMission, removeMissions, toggleMission, hideAlert, sortName, sortAddenda };
const mapStateToProps = state => {
  return {
    ...state,
    missions: sortMissions(state, getDataMissions(state)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
