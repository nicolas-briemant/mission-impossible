import React from 'react';
import PropTypes from 'prop-types';
import { Header, HeaderLeft, HeaderRight, Title, Menu } from './components/app';
import Missions from './components/missions';

const App = ({ missions }) => (
  <div>
    <Header isFixed>
      <HeaderRight>
        <Menu />
      </HeaderRight>
      <HeaderLeft>
        <Title />
      </HeaderLeft>
    </Header>
    <Missions missions={missions} />
  </div>
);

App.propTypes = {
  missions: PropTypes.array,
};

export default App;
