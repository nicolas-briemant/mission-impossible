import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import logger from '../logger';
import Mission from './mission';
import Toolbar from './toolbar';

const StyledMissions = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
});

const Missions = ({ missions, removeMissions, toggleMission, removeMission }) => (
  <Fragment>
    <Toolbar missions={missions} removeMissions={removeMissions} />
    <StyledMissions>
      {missions.map((mission) => (
        <Mission
          key={mission.id}
          {...mission}
          toggleMission={toggleMission}
          removeMission={removeMission}
        />
      ))}
    </StyledMissions>
  </Fragment>
);

Missions.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number,
    })
  ).isRequired,
  removeMissions: PropTypes.func.isRequired,
  toggleMission: PropTypes.func.isRequired,
  removeMission: PropTypes.func.isRequired,
};

export default logger('Missions')(Missions);
