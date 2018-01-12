import React from 'react';
import PropTypes from 'prop-types';

export default mapDisPatchToProps => Component => {
  class ConnectedComponent extends React.Component {
    componentWillMount() {
      const { store } = this.props;
      store.listen(() => this.forceUpdate());
    }

    render() {
      const { store } = this.props;
      const { dispatch, getState } = store;
      const props = { ...getState(), ...mapDisPatchToProps(dispatch) };

      return <Component {...props} />;
    }
  }

  ConnectedComponent.propTypes = {
    store: PropTypes.object,
  };
  return ConnectedComponent;
};
