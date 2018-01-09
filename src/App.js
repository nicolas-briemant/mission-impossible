import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import './App.css';
import logo from './data/logo.png';
import Missions from './components/missions/sections';
import { Header, HeaderLeft, HeaderMiddle, HeaderRight } from './components/missions/header';

const Logo = glamorous.img({
  width: 75,
});

const Menu = glamorous.ul({
  display: 'flex',
  flexDirection: 'row',
  marginRight: 10,
});

const ItemMenu = glamorous.li({
  display: 'flex',
  flexDirection: 'row',
  listStyleType: 'none',
  margin: 20,
});

const LogoItemMenu = glamorous.span({
  marginRight: 10,
});

const App = ({ missions }) => (
  <div className="App">
    <Header>
      <HeaderLeft>
        <h1 className="App-title">Welcome to mission impossible</h1>
      </HeaderLeft>
      <HeaderMiddle>
        <Logo alt="Logo" src={logo} />
      </HeaderMiddle>
      <HeaderRight>
        <Menu>
          <ItemMenu>
            <LogoItemMenu className="pt-icon-list" />
            <p>Missions</p>
          </ItemMenu>
          <ItemMenu>
            <LogoItemMenu className="pt-icon-people" />
            <p>Peoples</p>
          </ItemMenu>
        </Menu>
      </HeaderRight>
    </Header>
    <Missions missions={missions} />
  </div>
);

App.propTypes = {
  missions: PropTypes.array,
};

export default App;
