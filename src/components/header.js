import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import 'normalize.css/normalize.css';
import '@blueprintjs/core/dist/blueprint.css';

const DivHeader = glamorous.header({
  background: '#1a2c51',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
});

export const HeaderLeft = ({ children }) => children;
export const HeaderRight = ({ children }) => children;
export const HeaderCenter = ({ children }) => children;

export const Header = ({ children }) => {
  const headerLeft = () => React.Children.toArray(children).find(({ type }) => type === HeaderLeft);
  const headerCenter = () => React.Children.toArray(children).find(({ type }) => type === HeaderCenter);
  const headerRight = () => React.Children.toArray(children).find(({ type }) => type === HeaderRight);

  return (
    <DivHeader>
      <div>{headerLeft()}</div>
      <div>{headerCenter()}</div>
      <div>{headerRight()}</div>
    </DivHeader>
  );
};

HeaderLeft.propTypes = {
  children: PropTypes.node,
};

HeaderRight.propTypes = {
  children: PropTypes.node,
};

HeaderCenter.propTypes = {
  children: PropTypes.node,
};

Header.propTypes = {
  children: PropTypes.node,
};
