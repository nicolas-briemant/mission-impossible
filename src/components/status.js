import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const StyledStatus = glamorous.span({
  fontWeight: 'bold',
  borderRight: '4px solid black',
  borderLeft: '4px solid black',
  borderTop: '4px solid black',
  borderBottom: '4px solid black',
});

export const Status = ({ number }) => {
  return <StyledStatus> {number} Missions</StyledStatus>;
};

Status.propTypes = {
  number: PropTypes.number.isRequired,
};
