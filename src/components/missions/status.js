import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { Colors } from '@blueprintjs/core';

const StyledCounter = glamorous.span(
  { fontWeight: 'bold' },
  ({ isEmpty }) => ({ color: isEmpty ? Colors.RED1 : Colors.BLUE1 })
);

const Status = ({ count }) => {
  const isEmpty = count <= 0;

  if (isEmpty) return <StyledCounter isEmpty={isEmpty}>No mission</StyledCounter>;

  return <StyledCounter isEmpty={isEmpty}>#{count} missions</StyledCounter>;
};

Status.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Status;
