import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, Classes, Colors, Button } from '@blueprintjs/core';
import cx from 'classnames';
import glamorous, { H5 } from 'glamorous';
import { Header, HeaderLeft, HeaderRight } from '../app';
import Status from './status';

//--------------------------------------------------------------------------------------------------
const StyledCard = glamorous(Card)({
  margin: '10px 0',
  width: 300,
  display: 'flex',
  justifyContent: 'space-between',
}, ({ isSelected }) => ({
  backgroundColor: isSelected ? 'lightcoral' : 'white',
}));
const StyledCardActions = glamorous.div({ display: 'flex', flexDirection: 'column' });
const StyledCardHeader = glamorous(H5)({ color: Colors.BLUE1 });

const Mission = ({
  id, name, clientId, partnerId, managerId, addenda, isSelected, selectMission, removeMission
}) => (
  <StyledCard isSelected={isSelected} className={cx(Classes.INTERACTIVE, Classes.ELEVATION_2)}>
    <StyledCardActions>
      <Button
        iconName="bookmark"
        className={cx(Classes.INTENT_PRIMARY)}
        onClick={() => selectMission(id)}
        disabled={isSelected}
      />
      <Button
        iconName="trash"
        className={cx(Classes.INTENT_DANGER)}
        onClick={() => removeMission(id)}
      />
    </StyledCardActions>
    <div>
      <StyledCardHeader>{name}</StyledCardHeader>
      <Fragment>
        {[clientId, partnerId, managerId].map((id, i) => <div key={`${id}-${i}`}><em>{id}</em></div>)}
      </Fragment>
      <div>
        addenda: (#{addenda.length}) {addenda.map((a) => a.workerId).join(' - ')}
      </div>
    </div>
  </StyledCard>
);

Mission.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  clientId: PropTypes.string,
  partnerId: PropTypes.string,
  managerId: PropTypes.string,
  addenda: PropTypes.arrayOf(
    PropTypes.shape({
      workerId: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectMission: PropTypes.func.isRequired,
  removeMission: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};

//--------------------------------------------------------------------------------------------------
const StyledContainer = glamorous.div({
  padding: 20,
});

const StyledMissions = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
});

const Missions = ({ missions, removeMissions, selectMission, removeMission }) => {
  const selectedMissions = missions.filter((mission) => mission.isSelected);
  const hasSelection = selectedMissions.length > 0;

  return (
    <StyledContainer>
      <Header>
        <HeaderLeft>
          <Status count={missions.length} />
        </HeaderLeft>
        <HeaderRight>
          <Status count={selectedMissions.length} />
          { hasSelection
              ? <Button
                  text="remove selected missions"
                  iconName="trash"
                  className={cx(Classes.INTENT_DANGER)}
                  onClick={() => removeMissions()}
                />
              : null
          }
        </HeaderRight>
      </Header>
      <StyledMissions>
        {missions.map((mission) => (
          <Mission
            key={mission.id}
            {...mission}
            selectMission={selectMission}
            removeMission={removeMission}
          />
        ))}
      </StyledMissions>
    </StyledContainer>
  );
};

Missions.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number,
    })
  ).isRequired,
  removeMissions: PropTypes.func.isRequired,
  selectMission: PropTypes.func.isRequired,
  removeMission: PropTypes.func.isRequired,
};

export default Missions;
