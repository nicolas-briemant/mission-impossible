import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import SearchBar from './search-bar';
import Mission from './mission';
// import logger from '../logger';

const MyDivCont = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
});

const Missions = ({ missions, removeMission, removeSelectedMissions, selectMission, selectedMissions, alert }) => {
  const count = missions.length;
  return (
    <div>
      <SearchBar
        name="nombre de mission"
        count={count}
        removeSelectedMissions={removeSelectedMissions}
        selectedMissions={selectedMissions}
        alert={alert}
      />
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
  removeSelectedMissions: PropTypes.func.isRequired,
  selectedMissions: PropTypes.object.isRequired,
  alert: PropTypes.string.isRequired,
};

export default Missions;
// export default logger('Missions')(Missions);
