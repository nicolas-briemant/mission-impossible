import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

const Worker = ({ workerId }) => <li>Id: {workerId}</li>;

Worker.propTypes = {
  workerId: PropTypes.array,
};

const Mission = ({ name, clientId, partnerId, managerId, addenda }) => (
  <Fragment>
    <li>
      <b>{name}</b>
    </li>
    <li>
      clientId: {clientId}, partnerId: {partnerId}, managerId: {managerId}
    </li>
    <ul>{addenda.map(worker => <Worker key={uniqid()} {...worker} />)}</ul>
  </Fragment>
);

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  clientId: PropTypes.string.isRequired,
  partnerId: PropTypes.string,
  managerId: PropTypes.string.isRequired,
  addenda: PropTypes.arrayOf(
    PropTypes.shape({
      workerId: PropTypes.string.isRequired,
    }),
  ),
};

const Missions = ({ missions }) => <ul>{missions.map(mission => <Mission key={mission.id} {...mission} />)}</ul>;

Missions.propTypes = {
  missions: PropTypes.array,
};

export default Missions;
