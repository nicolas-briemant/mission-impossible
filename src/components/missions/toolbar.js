import React from 'react';
import PropTypes from 'prop-types';
import { Classes, Button } from '@blueprintjs/core';
import cx from 'classnames';
import { Header, HeaderLeft, HeaderRight } from '../app';
import Status from './status';

const Toolbar = ({ missions, removeMissions }) => {
  const selectedMissions = missions.filter((mission) => mission.isSelected);
  const hasSelection = selectedMissions.length > 0;

  return (
    <Header>
      <HeaderLeft>
        <Status count={missions.length} />
      </HeaderLeft>
      <HeaderRight>
        { hasSelection
            ? <Button
                text={`remove selected missions (#${selectedMissions.length})`}
                iconName="trash"
                className={cx(Classes.INTENT_DANGER, Classes.MINIMAL)}
                onClick={() => removeMissions()}
              />
            : null
        }
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

export default Toolbar;
