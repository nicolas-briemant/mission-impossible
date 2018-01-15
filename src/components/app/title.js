import React from 'react';
import glamorous from 'glamorous';

const StyledTitle = glamorous.div({
  display: 'flex',
  alignItems: 'center',
});

export default () => (
  <StyledTitle>
    <code>mission impossible</code>
  </StyledTitle>
);
