import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Classes, Colors, Button, Switch } from '@blueprintjs/core';
import cx from 'classnames';
import glamorous, { H5 } from 'glamorous';

const StyledMission = glamorous.div({
  margin: '10px 0',
  width: 300,
  display: 'flex',
  justifyContent: 'space-between',
}, ({ isSelected, isHovered }) => ({
  backgroundColor: isSelected ? 'lightcoral' : 'white',
  color: isHovered ? 'red' : 'black',
}));
const StyledCardActions = glamorous.div({ display: 'flex', flexDirection: 'column' });
const StyledCardHeader = glamorous(H5)({ color: Colors.BLUE1 });

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
    const {
      id, name, clientId, partnerId, managerId, addenda, isSelected, toggleMission, removeMission
    } = this.props;

    return (
      <StyledMission
        isSelected={isSelected}
        isHovered={this.state.isHovered}
        onMouseEnter={() => this.boundUpdateIsHovered()}
        onMouseLeave={() => this.boundUpdateIsHovered()}
        className={cx(Classes.CARD, Classes.INTERACTIVE, Classes.ELEVATION_2)}
      >
        <StyledCardActions>
          <Switch
            checked={isSelected}
            onChange={() => toggleMission(id)}
          />
          <Button
            iconName="trash"
            className={cx(Classes.INTENT_DANGER)}
            onClick={() => removeMission(id)}
          />
        </StyledCardActions>
        <div>
          <StyledCardHeader>{name}</StyledCardHeader>
          <Fragment>
            {[clientId, partnerId, managerId].map((rid, i) => <div key={`${rid}-${i}`}><em>{rid}</em></div>)}
          </Fragment>
          <div>
            addenda: (#{addenda.length}) {addenda.map((a) => a.workerId).join(' - ')}
          </div>
        </div>
      </StyledMission>
    );
  }
}

Mission.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  clientId: PropTypes.string,
  partnerId: PropTypes.string,
  managerId: PropTypes.string,
  addenda: PropTypes.arrayOf(
    PropTypes.shape({
      workerId: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggleMission: PropTypes.func.isRequired,
  removeMission: PropTypes.func.isRequired,
  isSelected: PropTypes.bool,
};

export default Mission;
