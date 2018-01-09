import React from 'react';
import PropTypes from 'prop-types';
import '@blueprintjs/core/dist/blueprint.css';
import Missions from './components/missions/index';
import { Header, HeaderLeft, HeaderRight } from './components/header';
import { Menu } from './components/menu';
import { Title } from './components/title';

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
