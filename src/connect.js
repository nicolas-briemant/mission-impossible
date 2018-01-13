import React from 'react';
import PropTypes from 'prop-types';

export default (mapDispatchToProps) => (Component) => {
  class ConnectedComponent extends React.Component {
    componentWillMount() {
      const { store } = this.props;
      store.listen(() => this.forceUpdate());
    }

    render() {
      const { store } = this.props;
      const { dispatch, getState } = store;

      const props = { ...getState(), ...mapDispatchToProps(dispatch) };

      return <Component {...props} />;
    }
  }

  ConnectedComponent.propTypes = {
    store: PropTypes.objectOf(
      PropTypes.shape({
        getState: PropTypes.func.isRequired,
        dispatch: PropTypes.func.isRequired,
        listen: PropTypes.func.isRequired,
      })
    ),
  };

  return ConnectedComponent;
};

