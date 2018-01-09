import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

export const HeaderLeft = ({ children }) => <Fragment>{children}</Fragment>;

HeaderLeft.propTypes = {
  children: PropTypes.node,
};

export const HeaderRight = ({ children }) => <Fragment>{children}</Fragment>;

HeaderRight.propTypes = {
  children: PropTypes.node,
};

const HeaderContain = glamorous.div({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Header = ({ children }) => {
  const headerLeft = () => React.Children.toArray(children).find(({ type }) => type === HeaderLeft);
  const headerRight = () => React.Children.toArray(children).find(({ type }) => type === HeaderRight);
  return (
    <HeaderContain>
      <div>{headerLeft()}</div>
      <div>{headerRight()}</div>
    </HeaderContain>
  );
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
};
