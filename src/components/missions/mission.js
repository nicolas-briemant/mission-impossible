import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { Button } from '@blueprintjs/core';
import glamorous from 'glamorous';

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

const MyDivCont = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
});

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

Mission.propTypes = {
  mission: PropTypes.object.isRequired,
  removeMission: PropTypes.func.isRequired,
  selectMission: PropTypes.func.isRequired,
  selectedMissions: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
};

export default Mission;
