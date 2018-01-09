import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import uniqid from 'uniqid';
import { Card } from '@blueprintjs/core';
import 'normalize.css/normalize.css';
import '@blueprintjs/core/dist/blueprint.css';

const Worker = ({ workerId }) => <li>Id: {workerId}</li>;

Worker.propTypes = {
  workerId: PropTypes.string,
};

const CellMission = glamorous(Card)({
  width: 300,
  margin: 10,
});

const Mission = ({ name, clientId, partnerId, managerId, addenda }) => (
  <CellMission interactive="true" elevation={Card.ELEVATION_TWO}>
    <b>{name}</b>
    <p>
      clientId: {clientId}, partnerId: {partnerId}, managerId: {managerId}
    </p>
    <ul>{addenda.map(worker => <Worker key={uniqid()} {...worker} />)}</ul>
  </CellMission>
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

const Container = glamorous.div({
  display: 'flex',
});

const FilterMissions = glamorous.aside({});

const ListMissions = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  // border: 'solid',
  margin: 10,
});

const Missions = ({ missions }) => (
  <Container>
    <FilterMissions>
      <b>Nombre de Missions: {missions.length}</b>
      <input className="pt-input pt-round" type="text" />
    </FilterMissions>
    <ListMissions>{missions.map(mission => <Mission key={mission.id} {...mission} />)}</ListMissions>
  </Container>
);

Missions.propTypes = {
  missions: PropTypes.array,
};

export default Missions;
