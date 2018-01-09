import React from 'react';
import glamorous from 'glamorous';
import logo from '../../logo.svg';

const StyledTitle = glamorous.div({
  display: 'flex',
  alignItems: 'center',
});

const StyledLogo = glamorous.img({
  height: 50,
  width: 50,
});

export default () => (
  <StyledTitle>
    <StyledLogo src={logo} alt="logo" />
    <code>mission impossible</code>
  </StyledTitle>
);
