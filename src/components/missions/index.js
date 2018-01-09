import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { Status } from '../status';

const Mission = ({ id, name, clientId, partnerId, managerId, addenda }) => {
  return (
    <StyledMission>
      <h2> Mission {id}</h2>
      <h3>{name}</h3>
      <p>
        {clientId}, {partnerId}, {managerId}
      </p>
      <p>
        Workers ({addenda.length}): {addenda.map(worker => worker.workerId)}
      </p>
    </StyledMission>
  );
};

const StyledMission = glamorous.div({
  marginTop: '20px',
  background: '#ccebff',
  borderRight: '4px solid black',
  borderLeft: '4px solid black',
  borderBottom: '4px solid black',
  borderTop: '4px solid black',
  marginRight: '20px',
  marginLeft: '20px',
  paddingRight: '20px',
  paddingLeft: '20px',
  color: '#000000',
  width: '20%',
  alignContent: 'center',
  paddingTop: '20',
});

Mission.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  clientId: PropTypes.string,
  partnerId: PropTypes.string,
  managerId: PropTypes.string,
  addenda: PropTypes.arrayOf(
    PropTypes.shape({
      workerId: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const StyledMissions = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  backgroundColor: 'white',
});

const Missions = ({ missions }) => (
  <div>
    <Status number={missions.length} />
    <StyledMissions>{missions.map(mission => <Mission key={mission.id} {...mission} />)}</StyledMissions>
  </div>
);

Missions.propTypes = {
  missions: PropTypes.array,
};

export default Missions;
