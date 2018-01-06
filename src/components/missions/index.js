import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ name, clientId, partnerId, managerId, addenda }) => {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>
        clientId: {clientId}, partnerId: {partnerId}, managerId: {managerId}
      </p>
      <ul>
        Workers ({addenda.length}): {addenda.map(worker => worker.workerId)}
      </ul>
    </div>
  );
};

Mission.propTypes = {
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

const Missions = ({ missions }) => <ul>{missions.map(mission => <Mission key={mission.id} {...mission} />)}</ul>;

Missions.propTypes = {
  missions: PropTypes.array,
};

export default Missions;
