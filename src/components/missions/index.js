import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import cx from 'classnames';
import { Button } from '@blueprintjs/core';

const StyleMission = glamorous.div(
  {
    width: '300px',
    padding: '20px',
    textAlign: 'center',
    border: '1px solid #c8c8c8',
  },
  ({ isSelected }) => ({
    backgroundColor: isSelected ? 'indianred' : 'white',
  }),
);

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

class Mission extends Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
    this.boundUpdateIsHovered = this.updateIsHovered.bind(this);
  }

  updateIsHovered() {
    this.setState({ isHovered: !this.state.isHovered });
  }

  render() {
    const { id, name, clientId, partnerId, managerId, addenda, isSelected, removeMission, toggleMission } = this.props;
    return (
      <StyleMission
        isHovered={this.state.isHovered}
        isSelected={isSelected}
        onMouseEnter={() => this.boundUpdateIsHovered()}
        onMouseLeave={() => this.boundUpdateIsHovered()}
      >
        <h3>{name}</h3>
        <p>
          clientId: {clientId}, partnerId: {partnerId}, managerId: {managerId}
        </p>
        <p>
          Workers ({addenda.length}): {addenda.map(w => w.workerId).join(' ')}
        </p>
        {this.state.isHovered ? (
          <div>
            <Button iconName="trash" text="Supprimer" onClick={() => removeMission(id)} />
            <Button iconName="add" text="Sélectionner" onClick={() => toggleMission(id)} />
          </div>
        ) : null}
      </StyleMission>
    );
  }
}

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
  isSelected: PropTypes.bool,
  removeMission: PropTypes.func.isRequired,
  toggleMission: PropTypes.func.isRequired,
};

const Missions = ({ missions, removeMission, toggleMission, removeMissions, sortName, sortAddenda }) => {
  const colorNbMissions = {
    red: false,
    green: true,
  };

  const isAnyoneIsSelected = missions.filter(e => e.isSelected === true);
  return (
    <MainContainer>
      <Toolbar>
        <i className={cx((colorNbMissions: missions.length))}>Nombre de mission(s) : {missions.length}</i>
        <div>
          {isAnyoneIsSelected.length ? (
            <button type="button" className="pt-button pt-intent-danger" onClick={() => removeMissions()}>
              Supprimer la selection : ({isAnyoneIsSelected.length})
              <span className="pt-icon-standard pt-icon-cross pt-align-right" />
            </button>
          ) : null}
          <button
            type="button"
            className="pt-button pt-icon-sort-alphabetical pt-intent-primary"
            onClick={() => sortName()}
          >
            Trier par nom
          </button>
          <button
            type="button"
            className="pt-button pt-icon-sort-numerical pt-intent-primary"
            onClick={() => sortAddenda()}
          >
            {"Trier par nombre d'addenda"}
          </button>
        </div>
      </Toolbar>
      <MissionsContainer>
        {missions.map(mission => (
          <Mission key={mission.id} {...mission} removeMission={removeMission} toggleMission={toggleMission} />
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
  toggleMission: PropTypes.func.isRequired,
  removeMissions: PropTypes.func.isRequired,
  sortName: PropTypes.func.isRequired,
  sortAddenda: PropTypes.func.isRequired,
};

export default Missions;
