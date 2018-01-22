import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import glamorous from 'glamorous';
import { removeMission as removeMissionAC, toggleMission as toggleMissionAC } from '../../actions';
import { getSortedMissions } from '../../selectors';
import Mission from './mission';
import Toolbar from './toolbar';

const StyledMissions = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '0 15px',
});

const Missions = ({ missions, workers, toggleMission, removeMission }) => (
  <Fragment>
    <Toolbar />
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
  toggleMission: PropTypes.func.isRequired,
  removeMission: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  removeMission: removeMissionAC,
  toggleMission: toggleMissionAC,
};

const mapStateToProps = (state) => ({
  ...state,
  missions: getSortedMissions(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Missions);
