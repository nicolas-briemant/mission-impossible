import React from 'react';
import PropTypes from 'prop-types';

const Worker = ({ firstName, lastName }) => <div>{firstName} {lastName}</div>;

Worker.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Worker;
