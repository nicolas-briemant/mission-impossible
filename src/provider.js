import React from 'react';
import PropTypes from 'prop-types';

class Provider extends React.Component {
  getChildContext() {
    //met dans le context le store
    const { store } = this.props;
    return { store };
  }
  render() {
    const { children } = this.props;
    return children;
  }
}
Provider.propTypes = {
  store: PropTypes.object,
  children: PropTypes.node,
};
Provider.childContextTypes = {
  //defini ce que je vais mettre dans le context
  store: PropTypes.object,
};

export default Provider;
