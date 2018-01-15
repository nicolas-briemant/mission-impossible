import React from 'react';
import PropTypes from 'prop-types';

export default id => Component => {
  // eslint-disable-next-line
  class Logger extends React.Component {
    render() {
      console.log('render:', id, this.props.id); // eslint-disable-line
      return <Component {...this.props} />;
    }
  }

  Logger.propTypes = {
    id: PropTypes.number.isRequired,
  };

  return Logger;
};
