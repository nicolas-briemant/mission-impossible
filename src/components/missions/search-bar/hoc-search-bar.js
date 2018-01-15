import React from 'react';
import glamorous from 'glamorous';

export default () => Component => {
  // eslint-disable-next-line react/prefer-stateless-function
  class HocSearchBar extends React.Component {
    render() {
      const MyDivCont = glamorous.div({
        marginTop: '20px',
        marginBottom: '20px',
        padding: '0px',
        display: 'flex',
        alignItem: 'left',
        width: '100%',
      });
      return (
        <MyDivCont>
          <Component {...this.props} />
        </MyDivCont>
      );
    }
  }
  return HocSearchBar;
};
