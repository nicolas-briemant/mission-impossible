import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ name, clientId, partnerId, managerId, addenda }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>
        clientId: {clientId}, partnerId: {partnerId}, managerId: {managerId}
      </p>
      <p>
        Workers ({addenda.length}): {addenda.map(w => w.workerId).join(' ')}
      </p>
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

const Missions = ({ missions }) => missions.map(mission => <Mission key={mission.id} {...mission} />);

Missions.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
};

export default Missions;
