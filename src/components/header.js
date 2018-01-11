import React, { Fragment } from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

export const HeaderLeft = ({ children }) => <Fragment>{children}</Fragment>;

export const HeaderRight = ({ children }) => <Fragment>{children}</Fragment>;

HeaderLeft.propTypes = {
  children: PropTypes.node,
};
HeaderRight.propTypes = {
  children: PropTypes.node,
};

const StyledHeader = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'blue',
  marginBottom: '10px',
  paddingTop: '40px',
  height: '100px',
});

export const Header = ({ children }) => {
  const headerLeft = () => React.Children.toArray(children).find(({ type }) => type === HeaderLeft);
  const headerRight = () => React.Children.toArray(children).find(({ type }) => type === HeaderRight);
  return (
    <StyledHeader>
      <div>{headerLeft()}</div>
      <div>{headerRight()}</div>
    </StyledHeader>
  );
};
Header.propTypes = {
  children: PropTypes.node,
};
