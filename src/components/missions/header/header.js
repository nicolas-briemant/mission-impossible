import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { Navbar, NavbarGroup } from '@blueprintjs/core';
import 'normalize.css/normalize.css';

const MyNavbarGroup = glamorous(NavbarGroup)({
  display: 'flex',
  alignItems: 'center',
});

export const HeaderLeft = ({ children }) => <Fragment>{children}</Fragment>;

HeaderLeft.propTypes = {
  children: PropTypes.node,
};

export const HeaderRight = ({ children }) => <Fragment>{children}</Fragment>;

HeaderRight.propTypes = {
  children: PropTypes.node,
};

export const Header = ({ children }) => {
  const headerLeft = () => React.Children.toArray(children).find(({ type }) => type === HeaderLeft);
  const headerRight = () => React.Children.toArray(children).find(({ type }) => type === HeaderRight);

  return (
    <header>
      <Navbar>
        <MyNavbarGroup align="left">{headerLeft()}</MyNavbarGroup>
        <NavbarGroup align="right">{headerRight()}</NavbarGroup>
      </Navbar>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};
