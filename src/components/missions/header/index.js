import React from 'react';
import glamorous from 'glamorous';
import { HeaderFull, HeaderLeft, HeaderMiddle, HeaderRight } from './header';
import logo from '../../../data/logo.png';
import '../../../App.css';

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

const Header = () => (
  <HeaderFull>
    <HeaderLeft>
      <a>
        <Logo alt="Logo" src={logo} />
      </a>
    </HeaderLeft>
    <HeaderMiddle>
      <h1 className="App-title">Missions List</h1>
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
  </HeaderFull>
);

export default Header;
