import React from 'react';

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

  return ConnectedComponent;
};

