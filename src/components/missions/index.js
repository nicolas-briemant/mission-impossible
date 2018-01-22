import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import Mission from './mission';
import Toolbar from './toolbar';

const StyledMissions = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '0 15px',
});

const Missions = ({ missions, workers, removeMissions, toggleMission, removeMission }) => (
  <Fragment>
    <Toolbar missions={missions} removeMissions={removeMissions} />
    <StyledMissions>
      {missions.map((mission) => (
        <Mission
          key={mission.id}
          {...mission}
          workers={workers}
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
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  workers: PropTypes.object.isRequired,
  removeMissions: PropTypes.func.isRequired,
  toggleMission: PropTypes.func.isRequired,
  removeMission: PropTypes.func.isRequired,
};

export default Missions;
