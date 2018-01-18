import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

export const ToolbarLeft = ({ children }) => <Fragment>{children}</Fragment>;

export const ToolbarRight = ({ children }) => <Fragment>{children}</Fragment>;

ToolbarLeft.propTypes = {
  children: PropTypes.node,
};
ToolbarRight.propTypes = {
  children: PropTypes.node,
};

const StyledToolbar = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'white',
  marginBottom: '10px',
  paddingTop: '4px',
});

export const Toolbar = ({ children }) => {
  const toolbarLeft = () => React.Children.toArray(children).find(({ type }) => type === ToolbarLeft);
  const toolbarRight = () => React.Children.toArray(children).find(({ type }) => type === ToolbarRight);
  return (
    <StyledToolbar>
      <div>{toolbarLeft()}</div>
      <div>{toolbarRight()}</div>
    </StyledToolbar>
  );
};
Toolbar.propTypes = {
  children: PropTypes.node,
};
