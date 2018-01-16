import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { Button } from '@blueprintjs/core';
import 'normalize.css/normalize.css';
import '@blueprintjs/core/dist/blueprint.css';
// import logger from '../../logger';
import Mission from './mission';
const ListMissions = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  margin: 10,
});

// const LoggedMission = logger('mission')(Mission);

const Missions = ({ missions, selectMission, removeMission, removeSelectedMissions }) => {
  const nbSelectedMissions = missions.filter(mission => mission.isSelected).length;

  return (
    <section>
      <b>Nombre de Missions: {missions.length}</b>
      <Button
        iconName="trash"
        text={`Delete ${nbSelectedMissions} ${nbSelectedMissions > 1 ? 'missions' : 'mission'}`}
        onClick={() => removeSelectedMissions()}
      />
      <ListMissions>
        {missions.map(mission => (
          <Mission key={mission.id} {...mission} selectMission={selectMission} removeMission={removeMission} />
        ))}
      </ListMissions>
    </section>
  );
};

Missions.propTypes = {
  missions: PropTypes.array,
  selectMission: PropTypes.func,
  removeMission: PropTypes.func,
  removeSelectedMissions: PropTypes.func,
};
// export default connect(mapStateToProps, MapDispatchToProps)(logger('Missions')(Missions));
export default Missions;
