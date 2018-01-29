import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import cx from 'classnames';
import { Menu, MenuItem, Popover, Position, Checkbox } from '@blueprintjs/core';
import Mission from './mission';

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

const Missions = ({
  missions,
  removeMission,
  toggleMission,
  removeMissions,
  filterMissionOpen,
  filterMissionEnd,
  filterMissions,
  sortMissions,
  requestAction,
  iconElement,
  searchBar,
}) => {
  const colorNbMissions = {
    red: false,
    green: true,
  };
  const isAnyoneIsSelected = missions.filter(e => e.isSelected === true);

  const filterAndSortMenu = (
    <Menu>
      <li className="pt-menu-header">
        <h6>Tri</h6>
      </li>
      <MenuItem iconName="pt-icon-sort-alphabetical" text="Trier par nom" onClick={() => sortMissions('SORT_NAME')} />
      <MenuItem
        iconName="pt-icon-sort-numerical"
        text="Trier par date de debut"
        onClick={() => sortMissions('SORT_DATE_START')}
      />
      <MenuItem
        iconName="pt-icon-sort-numerical"
        text="Trier par date de fin"
        onClick={() => sortMissions('SORT_DATE_END')}
      />
      <li className="pt-menu-header">
        <h6>Filtre</h6>
      </li>
      <Checkbox checked={filterMissions.missionOpen} onChange={() => filterMissionOpen()} label="Missions en cours" />
      <Checkbox checked={filterMissions.missionEnd} onChange={() => filterMissionEnd()} label="Missions terminée" />
    </Menu>
  );

  return (
    <MainContainer>
      <Toolbar>
        <b className={cx((colorNbMissions: missions.length))}>Nombre de mission(s) : {missions.length}</b>
        <div className="pt-input-group .modifier">
          <span className="pt-icon pt-icon-search" />
          <input
            className="pt-input"
            type="search"
            placeholder="Recherche"
            dir="auto"
            onChange={e => searchBar(e.target.value)}
          />
        </div>
        <div>
          {isAnyoneIsSelected.length ? (
            <button type="button" className="pt-button pt-intent-danger" onClick={() => removeMissions()}>
              Supprimer la selection : ({isAnyoneIsSelected.length})
              <span className="pt-icon-standard pt-icon-cross pt-align-right" />
            </button>
          ) : null}
          <button
            disabled={iconElement.icon === 'spinner fa-spin'}
            type="button"
            className="pt-button"
            onClick={() => requestAction()}
          >
            <i className={`fa fa-${iconElement.icon} fa-1x`} style={{ color: iconElement.color }} />
          </button>
          <Popover content={filterAndSortMenu} position={Position.BOTTOM}>
            <button className="pt-button pt-icon-filter" type="button">
              Filtre et tri
            </button>
          </Popover>
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
  sortMissions: PropTypes.func.isRequired,
  filterMissionOpen: PropTypes.func.isRequired,
  filterMissionEnd: PropTypes.func.isRequired,
  filterMissions: PropTypes.object.isRequired,
  searchBar: PropTypes.string,
  iconElement: PropTypes.obj,
  requestAction: PropTypes.func,
};

export default Missions;
