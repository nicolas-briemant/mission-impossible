import React, { Fragment } from 'react';
import glamorous from 'glamorous';

//--------------------------------------------------------------------------------------------------
export const HeaderLeft = ({ children }) => <Fragment>{ children }</Fragment>;

//--------------------------------------------------------------------------------------------------
export const HeaderRight = ({ children }) => <Fragment>{ children }</Fragment>;

//--------------------------------------------------------------------------------------------------
const StyledHeader = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
});

export const Header = ({ children }) => {
  const headerLeft = () => React.Children.toArray(children).find(({type}) => type === HeaderLeft);
  const headerRight = () => React.Children.toArray(children).find(({type}) => type === HeaderRight);

  return (
    <StyledHeader>
      <div>{headerLeft()}</div>
      <div>{headerRight()}</div>
    </StyledHeader>
  );
};
