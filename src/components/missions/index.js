import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { Button, ButtonGroup } from '@blueprintjs/core';
import 'normalize.css/normalize.css';
import '@blueprintjs/core/dist/blueprint.css';
import Mission from './mission';

const ListMissions = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  margin: 10,
});

const Missions = ({
  missions,
  selectMission,
  removeMission,
  removeSelectedMissions,
  blockedAction,
  toogleSortMissionsByNames,
  sortByMissionsNames,
  sortMissionsByStartDate,
  sortMissionsByEndDate,
  filterMissionsInProgress,
  filterMissionsEnded,
}) => {
  const nbSelectedMissions = missions.filter(mission => mission.isSelected).length;

  return (
    <section>
      <b>Nombre de Missions: {missions.length}</b>
      {blockedAction ? <div>You are not allow to execute this action ({blockedAction})</div> : null}
      <ButtonGroup>
        <Button iconName="pt-icon-sort-alphabetical-desc" text="by names" onClick={() => toogleSortMissionsByNames()} />
        <Button
          iconName="pt-icon-sort-alphabetical-desc"
          text="by start date"
          onClick={() => sortMissionsByStartDate()}
        />
        <Button
          iconName={sortByMissionsNames ? 'pt-icon-sort-alphabetical' : 'pt-icon-sort-alphabetical-desc'}
          text="by end date"
          onClick={() => sortMissionsByEndDate()}
        />
      </ButtonGroup>
      <ButtonGroup>
        <Button iconName="" text="In progress" onClick={() => filterMissionsInProgress()} />
        <Button iconName="" text="Ended" onClick={() => filterMissionsEnded()} />
      </ButtonGroup>
      <Button
        iconName="trash"
        text={`Delete ${nbSelectedMissions} ${nbSelectedMissions > 1 ? 'missions' : 'mission'}`}
        onClick={() => removeSelectedMissions()}
      />
      <ListMissions>
        {missions.map(mission => {
          return <Mission key={mission.id} {...mission} selectMission={selectMission} removeMission={removeMission} />;
        })}
      </ListMissions>
    </section>
  );
};

Missions.propTypes = {
  missions: PropTypes.array,
  selectMission: PropTypes.func,
  removeMission: PropTypes.func,
  removeSelectedMissions: PropTypes.func,
  blockedAction: PropTypes.string,
  toogleSortMissionsByNames: PropTypes.func,
  sortByMissionsNames: PropTypes.bool,
  sortMissionsByStartDate: PropTypes.func,
  sortMissionsByEndDate: PropTypes.func,
  filterMissionsInProgress: PropTypes.func,
  filterMissionsEnded: PropTypes.func,
};

export default Missions;
