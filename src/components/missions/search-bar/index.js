import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import cx from 'classnames';

const MyDivCont = glamorous.div({
  position: 'relative',
  marginTop: '20px',
  marginBottom: '20px',
  padding: '0px',
  display: 'flex',
  alignItem: 'left',
  width: '100%',
});

const SearchBar = ({ name, count }) => {
  const isEmpty = count <= 0;
  const hasS = !isEmpty;
  // const cls = cx(isEmpty ? 'red' : 'green');
  const cls = cx({
    red: isEmpty,
    green: !isEmpty,
    // [`${hasS ? 'toto' : ''}`]: true,
  });

  return (
    <MyDivCont>
      <code>{`${name}${hasS ? 's' : ''}:`}</code>
      <code className={cls}>{`${count}`}</code>
    </MyDivCont>
  );
};

SearchBar.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default SearchBar;
