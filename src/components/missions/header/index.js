import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { ButtonGroup, Button } from '@blueprintjs/core';
import { Header, HeaderLeft, HeaderRight } from './header';
import logo from '../../../data/logo.png';

const Logo = glamorous.img({
  width: 75,
});

const Header2 = ({ blockAction }) => (
  <Header>
    <HeaderLeft>
      <Logo alt="Logo" src={logo} />
      <h4>Titre du site</h4>
    </HeaderLeft>
    <HeaderRight>
      <ButtonGroup minimal="true" large="true">
        <Button iconName="pt-icon-align-justify" onClick={() => blockAction()}>
          Missions
        </Button>
        <Button iconName="people" onClick={() => blockAction()}>
          Peoples
        </Button>
      </ButtonGroup>
    </HeaderRight>
  </Header>
);

Header2.propTypes = {
  blockAction: PropTypes.func,
};

export default Header2;
