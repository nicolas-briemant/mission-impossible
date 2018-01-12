import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, HeaderLeft, HeaderRight, Title, Menu } from './components/app';
import Missions from './components/missions';
import * as actions from './actions';

class App extends Component {
  componentWillMount() {
    const { store } = this.props;
    store.listen(() => this.forceUpdate());
  }

  render() {
    const { store } = this.props;
    const { dispatch, getState } = store;
    const { missions } = getState();
    const removeMission = (missionId) => dispatch(actions.removeMission(missionId));
    const removeMissions = () => dispatch(actions.removeMissions());
    const toggleMission = (missionId) => dispatch(actions.toggleMission(missionId));

    return (
      <div>
        <Header isFixed>
          <HeaderRight>
            <Menu />
          </HeaderRight>
          <HeaderLeft>
            <Title />
          </HeaderLeft>
        </Header>
        <Missions
          missions={missions}
          removeMissions={removeMissions}
          removeMission={removeMission}
          toggleMission={toggleMission}
        />
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object,
};

export default App;
