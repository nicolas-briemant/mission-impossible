import React from 'react';
import glamorous from 'glamorous';
import { ButtonGroup, Button } from '@blueprintjs/core';
import { Header, HeaderLeft, HeaderRight } from './header';
import logo from '../../../data/logo.png';

const Logo = glamorous.img({
  width: 75,
});

export default () => (
  <Header>
    <HeaderLeft>
      <Logo alt="Logo" src={logo} />
      <h4>Titre du site</h4>
    </HeaderLeft>
    <HeaderRight>
      <ButtonGroup minimal="true" large="true">
        <Button iconName="pt-icon-align-justify">Missions</Button>
        <Button iconName="people">Peoples</Button>
      </ButtonGroup>
    </HeaderRight>
  </Header>
);
