import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import cx from 'classnames';
import uniqid from 'uniqid';
import { Button, Classes } from '@blueprintjs/core';
import 'normalize.css/normalize.css';
import '@blueprintjs/core/dist/blueprint.css';

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

export default class Mission extends Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
    this.boundUpdateIsHovered = this.updateIsHovered.bind(this);
  }

  updateIsHovered() {
    this.setState({ isHovered: !this.state.isHovered });
  }

  render() {
    const { id, name, clientId, partnerId, managerId, addenda, isSelected, selectMission, removeMission } = this.props;

    return (
      <CellMission
        className={cx(Classes.CARD, Classes.INTERACTIVE, Classes.ELEVATIONS_2)}
        onMouseEnter={() => this.updateIsHovered()}
        onMouseLeave={() => this.updateIsHovered()}
        isSelected={isSelected}
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
