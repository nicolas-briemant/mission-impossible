import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Mission = ({name, clientId, partnerId, managerId, addenda}) => (
  <div>
    <h2>{name}</h2>
    <em>{[clientId, partnerId, managerId].join(' - ')}</em>
    <div>addenda: (#{addenda.length}) {addenda.map((a) => a.workerId).join(' - ')}</div>
  </div>
);

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  clientId: PropTypes.string,
  partnerId: PropTypes.string,
  managerId: PropTypes.string,
  addenda: PropTypes.arrayOf(
    PropTypes.shape({
      workerId: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Missions = ({ missions }) => (
  <Fragment>
    {missions.map((mission) => <Mission key={mission._id} {...mission} />)}
  </Fragment>
);

Missions.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number,
    })
  ).isRequired,
};

export default Missions;