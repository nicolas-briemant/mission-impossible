import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import uniqid from 'uniqid';
import cx from 'classnames';
import { Card, Slider, Button } from '@blueprintjs/core';
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

const Mission = ({ id, name, clientId, partnerId, managerId, addenda, isSelected, selectMission, removeMission }) => (
  <CellMission
    className={cx(isSelected ? { red: true } : { red: false })}
    interactive="true"
    elevation={Card.ELEVATION_TWO}
  >
    <b>{name}</b>
    <p>
      clientId: {clientId}, partnerId: {partnerId}, managerId: {managerId}
    </p>
    <ul>{addenda.map(worker => <Worker key={uniqid()} {...worker} />)}</ul>
    <Button iconName="select" text="select" onClick={() => selectMission(id)} />
    <Button iconName="trash" text="remove" onClick={() => removeMission(id)} />
  </CellMission>
);

Mission.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  clientId: PropTypes.string.isRequired,
  partnerId: PropTypes.string,
  managerId: PropTypes.string.isRequired,
  addenda: PropTypes.arrayOf(
    PropTypes.shape({
      workerId: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isSelected: PropTypes.bool,
  selectMission: PropTypes.func.isRequired,
  removeMission: PropTypes.func.isRequired,
};

const Container = glamorous.div({
  display: 'flex',
});

const FilterMissions = glamorous.aside({
  marginTop: '20',
});

const ListMissions = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  margin: 10,
});

const Missions = ({ missions, selectMission, removeMission, removeSelectedMissions }) => (
  <Container>
    <FilterMissions>
      <b>Nombre de Missions: {missions.length}</b>
      <Slider max={100} labelStepSize={25} />
      <Button iconName="trash" text="remove all" onClick={() => removeSelectedMissions()} />
    </FilterMissions>
    <ListMissions>
      {missions.map(mission => (
        <Mission key={mission.id} {...mission} selectMission={selectMission} removeMission={removeMission} />
      ))}
    </ListMissions>
  </Container>
);

Missions.propTypes = {
  missions: PropTypes.array,
  selectMission: PropTypes.func.isRequired,
  removeMission: PropTypes.func.isRequired,
  removeSelectedMissions: PropTypes.func.isRequired,
};

export default Missions;
