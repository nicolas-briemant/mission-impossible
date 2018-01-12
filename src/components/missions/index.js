import React from 'react';
import PropTypes from 'prop-types';
import Fragment from 'render-fragment';
import uniqid from 'uniqid';
import { Classes, Button } from '@blueprintjs/core';
import cx from 'classnames';
import glamorous from 'glamorous';
import SearchBar from './search-bar';
// import logger from '../logger';

const MyDivCont = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
});

const MyUlCont = glamorous.ul({
  width: '311px',
  margin: '10px',
  border: 'solid 1px black',
  padding: '0px',
});

const Mylist = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  ':hover': {
    fontWeight: 'bold',
  },
  ':active': {
    color: 'red',
    position: 'relative',
  },
});

const AlignCenter = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
});

const Missions = ({ missions, removeMission, selectMission, selectedMissions }) => {
  const count = missions.length;
  return (
    <div>
      <SearchBar name="nombre de mission" count={count} />
      <MyDivCont>
        {missions.map(mission => (
          <Mission
            key={mission.id}
            mission={mission}
            removeMission={removeMission}
            selectMission={selectMission}
            selectedMissions={selectedMissions}
            count={count}
          />
        ))}
      </MyDivCont>
    </div>
  );
};

const Mission = ({ mission, removeMission, selectMission, selectedMissions, count }) => {
  const { id, name, clientId, partnerId, managerId, addenda } = mission;
  if (count <= 0) {
    return (
      <MyDivCont>
        <p> No mission </p>
      </MyDivCont>
    );
  }

  return (
    <Fragment>
      <MyUlCont className={cx(Classes.INTERACTIVE, { [Classes.ELEVATION_4]: selectedMissions[id] })}>
        <Mylist>id: {id} </Mylist>
        <Mylist>name: {name} </Mylist>
        <Mylist>clientId: {clientId} </Mylist>
        <Mylist>partnerId: {partnerId}</Mylist>
        <Mylist>managerId: {managerId}</Mylist>
        <Mylist>addenda longueur = {addenda.length}</Mylist>
        {addenda.map(({ workerId }) => (
          <div key={uniqid()}>
            <Mylist>workerId: {workerId}</Mylist>
          </div>
        ))}
        <AlignCenter>
          <Button className="" iconName="trash" text="remove" onClick={() => removeMission(id)} />
          <Button className="" iconName="add" text="select" onClick={() => selectMission(id)} />
        </AlignCenter>
      </MyUlCont>
    </Fragment>
  );
};

Missions.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      clientId: PropTypes.string.isRequired,
      partnerId: PropTypes.string,
      managerId: PropTypes.string.isRequired,
      addenda: PropTypes.arrayOf(
        PropTypes.shape({
          workerId: PropTypes.string.isRequired,
        }),
      ),
    }).isRequired,
  ),
  removeMission: PropTypes.func.isRequired,
  selectMission: PropTypes.func.isRequired,
  selectedMissions: PropTypes.object.isRequired,
};

Mission.propTypes = {
  mission: PropTypes.object.isRequired,
  removeMission: PropTypes.func.isRequired,
  selectMission: PropTypes.func.isRequired,
  selectedMissions: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
};

export default Missions;
// export default logger('Missions')(Missions);
