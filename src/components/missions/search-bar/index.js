import React from 'react';
import PropTypes from 'prop-types';
import Fragment from 'render-fragment';
import { css } from 'glamor';
import cx from 'classnames';
import HocSearchBar from './hoc-search-bar';

const red = css({
  color: 'red',
});

const green = css({
  color: 'green',
});

const SearchBar = ({ name, count }) => {
  const isEmpty = count <= 0;
  const hasS = !isEmpty;
  // const cls = cx(isEmpty ? 'red' : 'green');
  const cls = cx({
    [red]: isEmpty,
    [green]: !isEmpty,
    // [`${hasS ? 'toto' : ''}`]: true,
  });

  return (
    <Fragment>
      <code>{`${name}${hasS ? 's' : ''}:`}</code>
      <code className={cls}>{`${count}`}</code>
    </Fragment>
  );
};

SearchBar.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default HocSearchBar('HocSearchBar')(SearchBar);
