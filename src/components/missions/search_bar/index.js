import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

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
  const s = count ? 's' : '';
  return (
    <MyDivCont>
      <code>{`${name}${s}:`}</code> <code className={`${count !== 0 ? 'green' : 'red'}`}>{`${count}`}</code>
    </MyDivCont>
  );
};

SearchBar.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default SearchBar;
