import React from 'react';
import '@blueprintjs/core/dist/blueprint.css';

import PropTypes from 'prop-types';
import { Header, HeaderLeft, HeaderRight } from './components/header';
import { Menu } from './components/menu';
import { Title } from './components/title';
import Missions from './components/missions/index';
import './App.css';

const App = ({ missions }) => (
  <div>
    <Header>
      <HeaderLeft>
        <Title />
      </HeaderLeft>
      <HeaderRight>
        <Menu />
      </HeaderRight>
    </Header>
    <Missions missions={missions} />
  </div>
);

App.propTypes = {
  missions: PropTypes.array,
};

export default App;
