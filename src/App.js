import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from './components/missions/header';
import Missions from './components/missions/sections';
import * as create from './actions';

class App extends Component {
  componentWillMount() {
    const { store } = this.props;
    store.listen(() => this.forceUpdate());
  }

  render() {
    const { store } = this.props;
    const { dispatch, getState } = store;
    const { missions } = getState();
    const selectMission = missionId => dispatch(create.selectMission(missionId));
    const removeMission = missionId => dispatch(create.removeMission(missionId));
    const removeSelectedMissions = () => dispatch(create.removeSelectedMissions());
    const actions = {
      selectMission,
      removeMission,
      removeSelectedMissions,
    };

    return (
      <div className="App">
        <Header missions={missions} />
        <Missions missions={missions} {...actions} />
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object,
};

export default App;
