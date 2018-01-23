import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import cx from 'classnames';
import { Button } from '@blueprintjs/core';
import { Toolbar, ToolbarLeft, ToolbarRight } from '../toolbar';
import Status from '../status';

const Logo = glamorous.img({
  width: '5%',
});
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
  '.selected': { backgroundColor: 'red' },
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
    const { id, name, client, partner, manager, developers, removeMission, toggleMission, isSelected } = this.props;
    return (
      <StyledMission
        className={cx({ selected: isSelected })}
        onMouseEnter={() => this.updateIsHovered()}
        onMouseLeave={() => this.updateIsHovered()}
      >
        <h2> Mission {id}</h2>
        <h3>{name}</h3>
        <ul>
          <li>
            Client: {client.name}
            {client.logo ? <Logo alt="avatar" src={client.avatar.src} /> : null}
          </li>
          <li>
            Partner:{partner ? partner.name : null}
            {partner ? <Logo src={partner.avatar.src} /> : null}
          </li>
          <li>
            Manager: {manager.firstName} {manager.lastName}
          </li>
        </ul>
        Workers ({developers.length}):{' '}
        {developers.map(worker => <p key={worker.id}>{`${worker.firstName} ${worker.lastName}`}</p>)}
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
  manager: PropTypes.object,
  isSelected: PropTypes.bool,
  name: PropTypes.string.isRequired,
  client: PropTypes.object,
  partner: PropTypes.object,
  developers: PropTypes.array,
  removeMission: PropTypes.func.isRequired,
  toggleMission: PropTypes.func.isRequired,
};

const StyledMissions = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
});

const StyledLabel = glamorous.label({
  backgroundColor: 'red',
  color: 'white',
  width: '100px',
});
const Missions = ({
  missions,
  sortByEndDate,
  sortByStartDate,
  removeMission,
  toggleMission,
  removeMissions,
  unauthorized,
  isClicked,
  sortByName,
}) => (
  <Fragment>
    <Toolbar>
      <ToolbarLeft>
        <Status number={missions.length} />
      </ToolbarLeft>
      <ToolbarRight isClicked={isClicked}>
        <Button iconName="trash" text="Remove Missions" onClick={() => removeMissions()} />
        <Button iconName="error" text="Don't Click" onClick={() => unauthorized()} />
        <Button iconName="sort" text="Sort By Name" onClick={() => sortByName()} />
        <Button iconName="sort" text="Sort By Start Date" onClick={() => sortByStartDate()} />
        <Button iconName="sort" text="Sort By End Date" onClick={() => sortByEndDate()} />

        {isClicked ? <StyledLabel> {"Next time don't Click"} </StyledLabel> : null}
      </ToolbarRight>
    </Toolbar>
    <StyledMissions>
      {missions.map(mission => (
        <Mission key={mission.id} {...mission} removeMission={removeMission} toggleMission={toggleMission} />
      ))}
    </StyledMissions>
  </Fragment>
);

Missions.propTypes = {
  missions: PropTypes.array,
  removeMission: PropTypes.func.isRequired,
  toggleMission: PropTypes.func.isRequired,
  sortByStartDate: PropTypes.func.isRequired,
  sortByEndDate: PropTypes.func.isRequired,
  removeMissions: PropTypes.func.isRequired,
  unauthorized: PropTypes.func.isRequired,
  sortByName: PropTypes.func.isRequired,
  isClicked: PropTypes.bool,
};

export default Missions;
