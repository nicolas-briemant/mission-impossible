import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Classes, Tag } from '@blueprintjs/core';

const Status = ({ count }) => {
  const isEmpty = count <= 0;

  if (isEmpty) return <Tag className={cx(Classes.INTENT_DANGER, Classes.MINIMAL)}> No mission</Tag>;

  return <Tag className={cx(Classes.MINIMAL)}>#{count} missions</Tag>;
};

Status.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Status;
