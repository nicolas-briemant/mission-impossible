import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Classes, Button } from '@blueprintjs/core';
import cx from 'classnames';
import glamorous from 'glamorous';

const StyledMission = glamorous.div({
  margin: '10px 0',
  width: 250,
  position: 'relative',
});

const StyledActions = glamorous.div({
  position: 'absolute',
  bottom: 0,
  left: 0,
  display: 'flex',
  flexDirection: 'column',
});

const StyledContent = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& h5': {
    textAlign: 'center',
  }
});

class Mission extends Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false };
    this.boundUpdateIsHovered = this.updateIsHovered.bind(this);
  }

  updateIsHovered = () => {
    this.setState({ isHovered: !this.state.isHovered });
  }

  render() {
    const {
      id, name, clientId, partnerId, managerId, addenda, isSelected, toggleMission, removeMission
    } = this.props;
    const relationships = [clientId, partnerId, managerId];

    return (
      <StyledMission
        onMouseEnter={this.boundUpdateIsHovered}
        onMouseLeave={this.boundUpdateIsHovered}
        className={cx({[Classes.INTENT_SUCCESS]: isSelected}, Classes.CALLOUT)}
      >
        <StyledContent>
          <h5>{name}</h5>
          <Fragment>
            { relationships.map((rid, i) => <code key={`${rid}-${i}`}>{rid}</code>)}
          </Fragment>
          <div>(#{addenda.length} addenda)</div>
          <code>{addenda.map((a) => a.workerId).join(' - ')}</code>
        </StyledContent>
        { this.state.isHovered
          ? <StyledActions>
              <Button
                iconName={isSelected ? 'star' : 'star-empty'}
                className={cx({[Classes.INTENT_SUCCESS]: isSelected}, Classes.MINIMAL)}
                active={isSelected}
                onClick={() => toggleMission(id)}
              />
              <Button
                iconName="trash"
                className={cx(Classes.INTENT_DANGER, Classes.MINIMAL)}
                onClick={() => removeMission(id)}
              />
            </StyledActions>
          : null
        }
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
