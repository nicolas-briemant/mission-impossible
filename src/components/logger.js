import React from 'react';

export default id => Component => {
  // eslint-disable-next-line
  class Logger extends React.Component {
    render() {
      console.log('render:', id); // eslint-disable-line no-console
      return <Component {...this.props} />;
    }
  }

  return Logger;
};
