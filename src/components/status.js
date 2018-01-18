import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import cx from 'classnames';
//import logger from './logger';

const StyledStatus = glamorous.span({
  fontWeight: 'bold',
  ' .green': { color: 'green' },
  ' .red': { color: 'red' },
});

const Status = ({ number }) => {
  const isEmpty = number <= 0;

  return (
    <StyledStatus>
      {' '}
      <code className={cx({ red: isEmpty, green: !isEmpty })}>{number} Missions</code>{' '}
    </StyledStatus>
  );
};

Status.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Status;
