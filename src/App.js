import React from 'react';
import { Header, HeaderLeft, HeaderRight } from './components/header';
import Title from './components/title';
import Menu from './components/menu';
import Missions from './components/missions';

const App = () => (
  <div className="pt-dark">
    <Header isFixed>
      <HeaderRight>
        <Menu />
      </HeaderRight>
      <HeaderLeft>
        <Title />
      </HeaderLeft>
    </Header>
    <Missions />
  </div>
);

export default App;
