import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import cx from 'classnames';
import uniqid from 'uniqid';
import { Button, Classes } from '@blueprintjs/core';
import 'normalize.css/normalize.css';
import '@blueprintjs/core/dist/blueprint.css';

const Worker = ({ name }) => <li>{name}</li>;

Worker.propTypes = {
  name: PropTypes.string,
};

const FlexDiv = glamorous.div({
  display: 'flex',
});

const Logo = glamorous.img({
  width: 15,
  height: 15,
});

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
    const {
      id,
      name,
      client,
      partner,
      manager,
      workers,
      startDate,
      endDate,
      status,
      isSelected,
      selectMission,
      removeMission,
    } = this.props;

    return (
      <CellMission
        className={cx(Classes.CARD, Classes.INTERACTIVE, Classes.ELEVATIONS_2)}
        onMouseEnter={() => this.updateIsHovered()}
        onMouseLeave={() => this.updateIsHovered()}
        isSelected={isSelected}
      >
        <b>{name}</b>
        <FlexDiv>
          <p>client: {client.name}</p>
          {client.avatar.src ? <Logo src={client.avatar.src} /> : null}
        </FlexDiv>
        {partner ? (
          <FlexDiv>
            <p>partner: {partner.name}</p>
            {partner.avatar.src ? <Logo src={partner.avatar.src} /> : null}
          </FlexDiv>
        ) : null}
        {manager ? <p>manager: {`${manager.firstName} ${manager.lastName}`}</p> : null}
        <ul>{workers.map(worker => <Worker key={uniqid()} name={`${worker.firstName} ${worker.lastName}`} />)}</ul>
        {this.state.isHovered ? (
          <div>
            <Button iconName="select" text="select" onClick={() => selectMission(id)} />
            <Button iconName="trash" text="remove" onClick={() => removeMission(id)} />
          </div>
        ) : null}
        <p>Start date: {startDate.format('LL')}</p>
        <p>End date: {endDate.format('LL')}</p>
        <p>{status}</p>
      </CellMission>
    );
  }
}

Mission.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  client: PropTypes.shape({
    name: PropTypes.string.isRequired,
    src: PropTypes.string,
  }).isRequired,
  partner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    src: PropTypes.string,
  }),
  manager: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
  workers: PropTypes.array,
  startDate: PropTypes.object,
  endDate: PropTypes.object,
  status: PropTypes.string,
  isSelected: PropTypes.bool,
  selectMission: PropTypes.func.isRequired,
  removeMission: PropTypes.func.isRequired,
};
