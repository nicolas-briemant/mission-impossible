import React from 'react';

export default id => Component => {
  // eslint-disable-next-line react/prefer-stateless-function
  class logger extends React.Component {
    render() {
      console.log('render', id); // eslint-disable-line no-console
      return <Component {...this.props} />;
    }
  }
  return logger;
};
