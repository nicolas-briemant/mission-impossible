import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import cx from 'classnames';
import HocSearchBar from './hoc-search-bar';
import { Header, HeaderLeft, HeaderRight, HeaderMiddle } from '../../header';

const red = css({
  color: 'red',
});

const green = css({
  color: 'green',
});

const SearchBar = ({ name, count, removeSelectedMissions, selectedMissions, alert }) => {
  const isEmpty = count <= 0;
  const hasS = !isEmpty;
  // const cls = cx(isEmpty ? 'red' : 'green');
  const cls = cx({
    [red]: isEmpty,
    [green]: !isEmpty,
    // [`${hasS ? 'toto' : ''}`]: true,
  });

  return (
    <Header>
      <HeaderLeft>
        <code>{`${name}${hasS ? 's' : ''}:`}</code>
        <code className={cls}>{`${count}`}</code>
      </HeaderLeft>
      <HeaderMiddle>
        <p className={red}>{`${alert}`}</p>
      </HeaderMiddle>
      <HeaderRight>
        <button
          type="button"
          className="pt-button pt-intent-danger pt-icon-remove"
          onClick={() => removeSelectedMissions(selectedMissions)}
        >
          Delete
        </button>
      </HeaderRight>
    </Header>
  );
};

SearchBar.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  removeSelectedMissions: PropTypes.func.isRequired,
  selectedMissions: PropTypes.object.isRequired,
  alert: PropTypes.string.isRequired,
};

export default HocSearchBar('HocSearchBar')(SearchBar);
