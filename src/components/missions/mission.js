import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, Classes, Colors, Button, Switch } from '@blueprintjs/core';
import cx from 'classnames';
import glamorous, { H5 } from 'glamorous';

const StyledCard = glamorous(Card)({
  margin: '10px 0',
  width: 300,
  display: 'flex',
  justifyContent: 'space-between',
}, ({ isSelected }) => ({
  backgroundColor: isSelected ? 'lightcoral' : 'white',
}));
const StyledCardActions = glamorous.div({ display: 'flex', flexDirection: 'column' });
const StyledCardHeader = glamorous(H5)({ color: Colors.BLUE1 });

const Mission = ({
  id, name, clientId, partnerId, managerId, addenda, isSelected, toggleMission, removeMission
}) => (
  <StyledCard isSelected={isSelected} className={cx(Classes.INTERACTIVE, Classes.ELEVATION_2)}>
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
        {[clientId, partnerId, managerId].map((id, i) => <div key={`${id}-${i}`}><em>{id}</em></div>)}
      </Fragment>
      <div>
        addenda: (#{addenda.length}) {addenda.map((a) => a.workerId).join(' - ')}
      </div>
    </div>
  </StyledCard>
);

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