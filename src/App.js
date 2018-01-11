import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from './components/missions/header';
import Missions from './components/missions/sections';
import { removeMission as removeMissionAction } from './actions';

class App extends Component {
  componentWillMount() {
    const { store } = this.props;
    store.listen(() => this.forceUpdate());
  }

  render() {
    const { store } = this.props;
    const { dispatch, getState } = store;
    const { missions } = getState();
    const removeMission = missionId => dispatch(removeMissionAction(missionId));

    return (
      <div className="App">
        <Header missions={missions} />
        <Missions missions={missions} removeMission={removeMission} />
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object,
};

export default App;
