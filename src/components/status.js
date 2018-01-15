import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { Button } from '@blueprintjs/core';
import cx from 'classnames';
import logger from './logger';

const StyledStatus = glamorous.span({
  fontWeight: 'bold',
  ' .green': { color: 'green' },
  ' .red': { color: 'red' },
});

const Status = ({ number, removeMissions }) => {
  const isEmpty = number <= 0;

  return (
    <StyledStatus>
      {' '}
      <code className={cx({ red: isEmpty, green: !isEmpty })}>{number} Missions</code>{' '}
      <Button iconName="trash" text="Remove Missions" onClick={() => removeMissions()} />
    </StyledStatus>
  );
};

Status.propTypes = {
  number: PropTypes.number.isRequired,
  removeMissions: PropTypes.func.isRequired,
};

export default logger('Status')(Status);
