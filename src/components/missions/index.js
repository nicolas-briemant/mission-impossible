import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import cx from 'classnames';
import { Card, Button } from '@blueprintjs/core';
import 'normalize.css/normalize.css';
import '@blueprintjs/core/dist/blueprint.css';

const StyleMission = glamorous(Card)({
  width: '250px',
  background: 'blue',
  backgroundColor: 'blue',
});

const MainContainer = glamorous.div({
  margin: '2rem',
  padding: '3rem',
  border: '1px solid gray',
});

const Toolbar = glamorous.div({
  padding: '1rem',
  fontSize: '1.5em',
  border: '1px solid gray',
  textAlign: 'left',
  marginBottom: '1em',
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: '3px',
  alignItems: 'center',
});

const MissionsContainer = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const Mission = ({ id, name, clientId, partnerId, managerId, addenda, selected, removeMission, selectedMission }) => {
  return (
    <StyleMission className={cx({ red_selected: selected })}>
      <h3>{name}</h3>
      <p>
        clientId: {clientId}, partnerId: {partnerId}, managerId: {managerId}
      </p>
      <p>
        Workers ({addenda.length}): {addenda.map(w => w.workerId).join(' ')}
      </p>
      <Button iconName="trash" text="remove" onClick={() => removeMission(id)} />
      <Button iconName="people" text="select" onClick={() => selectedMission(id)} />
    </StyleMission>
  );
};

Mission.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  clientId: PropTypes.string,
  partnerId: PropTypes.string,
  managerId: PropTypes.string,
  addenda: PropTypes.arrayOf(
    PropTypes.shape({
      workerId: PropTypes.string.isRequired,
    }),
  ).isRequired,
  selected: PropTypes.bool,
  removeMission: PropTypes.func.isRequired,
  selectedMission: PropTypes.func.isRequired,
};

const Missions = ({ missions, removeMission, selectedMission, removeSelectedMission }) => {
  const colorNbMissions = {
    red: false,
    green: true,
  };

  const isAnyoneIsSelected = missions.filter(e => e.selected === true);
  return (
    <MainContainer>
      <Toolbar>
        <i className={cx((colorNbMissions: missions.length))}>Nombre de mission(s) : {missions.length}</i>
        <div>
          {isAnyoneIsSelected.length ? (
            <button type="button" className="pt-button pt-intent-danger" onClick={() => removeSelectedMission()}>
              Supprimer la selection : ({isAnyoneIsSelected.length})
              <span className="pt-icon-standard pt-icon-cross pt-align-right" />
            </button>
          ) : null}
          <button type="button" className="pt-button pt-intent-primary">
            Filtre
            <span className="pt-icon-standard pt-icon-arrow-right pt-align-right" />
          </button>
        </div>
      </Toolbar>
      <MissionsContainer>
        {missions.map(mission => (
          <Mission key={mission.id} {...mission} removeMission={removeMission} selectedMission={selectedMission} />
        ))}
      </MissionsContainer>
    </MainContainer>
  );
};

Missions.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
  removeMission: PropTypes.func.isRequired,
  selectedMission: PropTypes.func.isRequired,
  removeSelectedMission: PropTypes.func.isRequired,
};

export default Missions;
