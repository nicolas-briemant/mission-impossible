import React, { Fragment } from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';
import '../../../App.css';

const StyledHeader = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const HeaderLeft = ({ children }) => <Fragment>{children}</Fragment>;

HeaderLeft.propTypes = {
  children: PropTypes.node,
};

export const HeaderMiddle = ({ children }) => <Fragment>{children}</Fragment>;

HeaderMiddle.propTypes = {
  children: PropTypes.node,
};

export const HeaderRight = ({ children }) => <Fragment>{children}</Fragment>;

HeaderRight.propTypes = {
  children: PropTypes.node,
};

export const HeaderFull = ({ children }) => {
  const headerLeft = () => React.Children.toArray(children).find(({ type }) => type === HeaderLeft);
  const headerMiddle = () => React.Children.toArray(children).find(({ type }) => type === HeaderMiddle);
  const headerRight = () => React.Children.toArray(children).find(({ type }) => type === HeaderRight);

  return (
    <StyledHeader>
      <div>{headerLeft()}</div>
      <div>{headerMiddle()}</div>
      <div>{headerRight()}</div>
    </StyledHeader>
  );
};

HeaderFull.propTypes = {
  children: PropTypes.node,
};
