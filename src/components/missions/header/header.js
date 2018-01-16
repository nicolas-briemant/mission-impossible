import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { Navbar, NavbarGroup } from '@blueprintjs/core';
import 'normalize.css/normalize.css';

const Flexbox = css({
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
        <NavbarGroup className={Flexbox} align="left">
          {headerLeft()}
        </NavbarGroup>
        <NavbarGroup className={Flexbox} align="right">
          {headerRight()}
        </NavbarGroup>
      </Navbar>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};
