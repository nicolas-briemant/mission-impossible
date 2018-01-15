import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import cx from 'classnames';
import { Classes, Slider, Button } from '@blueprintjs/core';
import 'normalize.css/normalize.css';
import '@blueprintjs/core/dist/blueprint.css';
import logger from '../../logger';
import { selectMission, removeMission, removeSelectedMissions } from '../../../actions';

const Worker = ({ workerId }) => <li>Id: {workerId}</li>;

Worker.propTypes = {
  workerId: PropTypes.string,
};

const CellMission = glamorous.div(
  {
    width: 300,
    margin: 10,
  },
  ({ isSelected }) => ({
    color: isSelected ? 'red' : 'black',
  }),
);

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
    const { id, name, clientId, partnerId, managerId, addenda, isSelected } = this.props;

    return (
      <CellMission
        isSelected={isSelected}
        onMouseEnter={() => this.updateIsHovered()}
        onMouseLeave={() => this.updateIsHovered()}
        className={cx(Classes.CARD, Classes.INTERACTIVE, Classes.ELEVATIONS_2)}
        // interactive="true"
        // elevation={Card.ELEVATION_TWO}
      >
        <b>{name}</b>
        <p>
          clientId: {clientId}, partnerId: {partnerId}, managerId: {managerId}
        </p>
        <ul>{addenda.map(worker => <Worker key={uniqid()} {...worker} />)}</ul>
        {this.state.isHovered ? (
          <div>
            <Button iconName="select" text="select" onClick={() => selectMission(id)} />
            <Button iconName="trash" text="remove" onClick={() => removeMission(id)} />
          </div>
        ) : null}
      </CellMission>
    );
  }
}

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

const LoggedMission = logger('mission')(Mission);

const Missions = ({ missions }) => (
  <Container>
    <FilterMissions>
      <b>Nombre de Missions: {missions.length}</b>
      <Slider max={100} labelStepSize={25} />
      <Button iconName="trash" text="remove all" onClick={() => removeSelectedMissions()} />
    </FilterMissions>
    <ListMissions>
      {missions.map(mission => (
        <LoggedMission key={mission.id} {...mission} selectMission={selectMission} removeMission={removeMission} />
      ))}
    </ListMissions>
  </Container>
);

Missions.propTypes = {
  missions: PropTypes.array,
};

const mapStateToProps = state => state;
const MapDispatchToProps = { selectMission, removeMission, removeSelectedMissions };

export default connect(mapStateToProps, MapDispatchToProps)(logger('Missions')(Missions));
