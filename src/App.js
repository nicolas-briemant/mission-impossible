import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, HeaderLeft, HeaderRight, Title, Menu } from './components/app';
import Missions from './components/missions';
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
    const removeMission = (missionId) => dispatch(removeMissionAction(missionId));

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
        <Missions missions={missions} removeMission={removeMission} />
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object,
};

export default App;
