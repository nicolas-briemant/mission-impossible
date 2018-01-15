import React from 'react';
import PropTypes from 'prop-types';

export default (mapDispatchToProps) => (Component) => {
  class ConnectedComponent extends React.Component {
    componentWillMount() {
      const { store } = this.context;
      store.listen(() => this.forceUpdate());
    }

    render() {
      const { store } = this.context;
      const { dispatch, getState } = store;

      const props = { ...getState(), ...mapDispatchToProps(dispatch) };

      return <Component {...props} />;
    }
  }

  ConnectedComponent.contextTypes = {
    store: PropTypes.object.isRequired,
  };

  return ConnectedComponent;
};

