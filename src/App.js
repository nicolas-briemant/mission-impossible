import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Missions from './components/missions';
import { Header, HeaderLeft, HeaderRight, HeaderCenter } from './components/header';
import { Title, Logo, Menu } from './components/app/';
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
        <Missions missions={missions} removeMission={removeMission} />
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object,
};

export default App;
