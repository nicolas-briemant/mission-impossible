import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { Button } from '@blueprintjs/core';

const StyledToolbar = glamorous.div({
  fontWeight: 'bold',
});

const ToolBar = ({ removeMissions }) => {
  return (
    <StyledToolbar>
      <Button iconName="trash" text="Remove Missions" onClick={() => removeMissions()} />
    </StyledToolbar>
  );
};

ToolBar.propTypes = {
  removeMissions: PropTypes.func.isRequired,
};

export default ToolBar;
