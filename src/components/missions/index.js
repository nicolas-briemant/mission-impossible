import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import cx from 'classnames';
import { Button } from '@blueprintjs/core';
import Status from '../status';
import logger from '../logger';

const StyledMission = glamorous.div({
  marginTop: '20px',
  background: '#ccebff',
  borderRight: '4px solid black',
  borderLeft: '4px solid black',
  borderBottom: '4px solid black',
  borderTop: '4px solid black',
  marginRight: '20px',
  marginLeft: '20px',
  paddingRight: '20px',
  paddingLeft: '20px',
  color: '#000000',
  width: '20%',
  alignContent: 'center',
  paddingTop: '20',
});

class Mission extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
    this.updateIsHovered = this.updateIsHovered.bind(this);
  }
  updateIsHovered() {
    this.setState({ isHovered: !this.state.isHovered });
  }

  render() {
    const { id, name, clientId, partnerId, managerId, addenda, removeMission, toggleMission, isSelected } = this.props;
    return (
      <StyledMission
        className={cx({ selected: isSelected })}
        onMouseEnter={() => this.updateIsHovered()}
        onMouseLeave={() => this.updateIsHovered()}
      >
        <h2> Mission {id}</h2>
        <h3>{name}</h3>
        <p>
          {clientId}, {partnerId}, {managerId}
        </p>
        <p>
          Workers ({addenda.length}): {addenda.map(worker => worker.workerId)}
        </p>
        {this.state.isHovered ? (
          <Fragment>
            <Button iconName="select" text="select" onClick={() => toggleMission(id)} />
            <Button iconName="trash" text="remove" onClick={() => removeMission(id)} />
          </Fragment>
        ) : null}
      </StyledMission>
    );
  }
}

Mission.propTypes = {
  id: PropTypes.number,
  isSelected: PropTypes.bool,
  name: PropTypes.string.isRequired,
  clientId: PropTypes.string,
  partnerId: PropTypes.string,
  managerId: PropTypes.string,
  addenda: PropTypes.arrayOf(
    PropTypes.shape({
      workerId: PropTypes.string.isRequired,
    }),
  ).isRequired,
  removeMission: PropTypes.func.isRequired,
  toggleMission: PropTypes.func.isRequired,
};

const StyledMissions = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  //backgroundColor: 'white',
});

const Missions = ({ missions, removeMission, toggleMission, removeMissions }) => (
  <Fragment>
    <Status number={missions.length} removeMissions={removeMissions} />
    <StyledMissions>
      {missions.map(mission => (
        <Mission key={mission.id} {...mission} removeMission={removeMission} toggleMission={toggleMission} />
      ))}
    </StyledMissions>
  </Fragment>
);

Missions.propTypes = {
  missions: PropTypes.array,
  removeMissions: PropTypes.func.isRequired,
  removeMission: PropTypes.func.isRequired,
  toggleMission: PropTypes.func.isRequired,
};

export default logger('Missions')(Missions);
