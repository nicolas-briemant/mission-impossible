import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { Button } from '@blueprintjs/core';
import glamorous from 'glamorous';
import SearchBar from './search-bar';
// import logger from '../logger';

const MyDivCont = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
});

const MyUlCont = glamorous.ul(
  {
    width: '311px',
    margin: '10px',
    border: 'solid 1px black',
    padding: '0px',
  },
  ({ isSelected }) => ({
    backgroundColor: isSelected ? 'lightcoral' : 'white',
  }),
);

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

const Missions = ({ missions, removeMission, removeSelectedMissions, selectMission, selectedMissions }) => {
  const count = missions.length;
  return (
    <div>
      <SearchBar
        name="nombre de mission"
        count={count}
        removeSelectedMissions={removeSelectedMissions}
        selectedMissions={selectedMissions}
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

class Mission extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
    this.boundUpdateIsHovered = this.updateIsHovered.bind(this);
  }

  updateIsHovered = () => {
    this.setState({
      isHovered: !this.state.isHovered,
    });
  };

  render() {
    const { mission, removeMission, selectMission, selectedMissions, count } = this.props;
    const { id, name, clientId, partnerId, managerId, addenda } = mission;

    if (count <= 0) {
      const noMission = (
        <MyDivCont>
          <p> No mission </p>
        </MyDivCont>
      );
      return noMission;
    }

    return (
      <Fragment>
        <MyUlCont
          isHovered={this.state.isHovered}
          isSelected={selectedMissions[mission.id]}
          onMouseEnter={this.updateIsHovered}
          onMouseLeave={this.updateIsHovered}
        >
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
          {this.state.isHovered ? (
            <AlignCenter>
              <Button iconName="trash" text="remove" onClick={() => removeMission(id)} />
              <Button iconName="add" text="select" onClick={() => selectMission(id)} />
            </AlignCenter>
          ) : null}
        </MyUlCont>
      </Fragment>
    );
  }
}

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
