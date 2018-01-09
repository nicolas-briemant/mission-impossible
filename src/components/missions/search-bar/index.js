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
// {cx([Classes.DANGER]: isZero)}
const SearchBar = ({ name, count }) => {
  const isPlural = count ? 's' : '';
  const isZero = count !== 0 ? 'green' : 'red';
  return (
    <MyDivCont>
      <code>
        {`${name}`}
        {cx({ [isPlural]: true })}:
      </code>{' '}
      <code className={cx({ [isZero]: true })}>{`${count}`}</code>
    </MyDivCont>
  );
};

SearchBar.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default SearchBar;
// Erreur search-bar
