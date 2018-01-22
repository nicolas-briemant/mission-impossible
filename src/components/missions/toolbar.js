import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Classes, Button } from '@blueprintjs/core';
import cx from 'classnames';
import { removeMissions as removeMissionsAC, sortMissions as sortMissionsAC } from '../../actions';
import { getMissionTotalCount, getMissionSelectedCount, getMissionCount } from '../../selectors';
import { Header, HeaderLeft, HeaderRight } from '../header';

const Toolbar = ({ totalCount, selectedCount, count, removeMissions, sortMissions }) => {
  const hasMissions = totalCount > 1;
  const hasSelection = selectedCount > 0;

  return (
    <Header>
      <HeaderLeft>
        { hasMissions
            ? <code>#{count} mission(s) on {totalCount}</code>
            : <code>no mission</code>
        }
        &nbsp;
        { hasSelection
            ? <code>#{selectedCount} selected</code>
            : <code>no selection</code>
        }
      </HeaderLeft>
      <HeaderRight>
        { hasSelection
            ? <Button
                text={`remove selected missions (#${selectedCount})`}
                iconName="trash"
                className={cx(Classes.INTENT_DANGER, Classes.MINIMAL)}
                onClick={() => removeMissions()}
              />
            : null
        }
        <Button
          text="sort by name"
          className={cx(Classes.MINIMAL)}
          onClick={() => sortMissions('name')}
        />
      </HeaderRight>
    </Header>
  );
};

Toolbar.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      isSelected: PropTypes.bool,
    })
  ),
  removeMissions: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  removeMissions: removeMissionsAC,
  sortMissions: sortMissionsAC,
};

const mapStateToProps = (state) => ({
  ...state,
  totalCount: getMissionTotalCount(state),
  selectedCount: getMissionSelectedCount(state),
  count: getMissionCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
