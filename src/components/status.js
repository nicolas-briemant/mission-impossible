import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import cx from 'classnames';

const StyledStatus = glamorous.span({
  fontWeight: 'bold',
  borderRight: '4px solid black',
  borderLeft: '4px solid black',
  borderTop: '4px solid black',
  borderBottom: '4px solid black',
});

export const Status = ({ number }) => {
  const isEmpty = number <= 0;

  return (
    <StyledStatus>
      {' '}
      <code className={cx({ red: isEmpty, green: !isEmpty })}>{number} Missions</code>
    </StyledStatus>
  );
};

Status.propTypes = {
  number: PropTypes.number.isRequired,
};
