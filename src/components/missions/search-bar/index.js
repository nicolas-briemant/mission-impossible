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

const SearchBar = props => {
  const { alert, count, name, removeSelectedMissions, selectedMissions, mySortBy, sort } = props;

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
          className="pt-button pt-small pt-intent-primary pt-icon-changes"
          onClick={() => mySortBy('NAME', sort.direction)}
        >
          {'A->Z'}
        </button>
        <button
          type="button"
          className="pt-button pt-small pt-intent-primary pt-icon-changes"
          onClick={() => mySortBy('START_DATE', sort.direction)}
        >
          {'Start Date'}
        </button>
        <button
          type="button"
          className="pt-button pt-small pt-intent-primary pt-icon-changes"
          onClick={() => mySortBy('END_DATE', sort.direction)}
        >
          {'End Date'}
        </button>
        <button
          type="button"
          className="pt-button pt-small pt-intent-danger pt-icon-remove"
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
  mySortBy: PropTypes.func.isRequired,
  sort: PropTypes.shape({
    type: PropTypes.string.isRequired,
    direction: PropTypes.bool.isRequired,
  }).isRequired,
};

export default HocSearchBar('HocSearchBar')(SearchBar);
