// HOC High Order Component
// method Component as arg and return Component

// in Redux, Provider =>  paramaterized HOC
// const add = (offset) => (x) => x + offset;

// add(10)(1) =|= const add10 = add(10) => add10(1);

import React from 'react';
import PropTypes from 'prop-types';

export default mapDispatchToProps => Component => {
  class EnhancedComponent extends React.Component {
    componentWillMount() {
      const { store } = this.props;
      store.listen(() => this.forceUpdate());
    }

    render() {
      const { store } = this.props;
      const { dispatch, getState } = store;

      const props = { ...getState(), actions: mapDispatchToProps(dispatch) };
      return <Component {...props} />;
    }
  }

  EnhancedComponent.propTypes = {
    store: PropTypes.object,
  };

  return EnhancedComponent;
};
