import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Missions from './components/missions';
import { Header, HeaderLeft, HeaderRight } from './components/header';
import { removeMission as removeMissionAction } from './actions';
import Logo from './components/header/logo';
import Menu from './components/header/menu';
import logo from './img/007.png';

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
            <Logo src={logo} alt="007" title="Missions Impossible" />
          </HeaderLeft>
          <HeaderRight>
            <Menu />
          </HeaderRight>
        </Header>
        <Missions mission={missions} removeMission={removeMission} />
      </div>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};
export default App;
