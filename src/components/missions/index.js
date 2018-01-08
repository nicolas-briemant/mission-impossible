import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, Classes, Colors } from '@blueprintjs/core';
import cx from 'classnames';
import glamorous, { H5 } from 'glamorous';

//--------------------------------------------------------------------------------------------------
const StyledCard = glamorous(Card)({ margin: 10, width: 300 });
const StyledCardHeader = glamorous(H5)({ color: Colors.BLUE1 });

const Mission = ({name, clientId, partnerId, managerId, addenda}) => (
  <StyledCard className={cx(Classes.INTERACTIVE, Classes.ELEVATION_2)}>
    <StyledCardHeader>{name}</StyledCardHeader>
    <Fragment>
      {[clientId, partnerId, managerId].map((id, i) => <div key={`${id}-${i}`}><em>{id}</em></div>)}
    </Fragment>
    <div>
      addenda: (#{addenda.length}) {addenda.map((a) => a.workerId).join(' - ')}
    </div>
  </StyledCard>
);

Mission.propTypes = {
  name: PropTypes.string.isRequired,
  clientId: PropTypes.string,
  partnerId: PropTypes.string,
  managerId: PropTypes.string,
  addenda: PropTypes.arrayOf(
    PropTypes.shape({
      workerId: PropTypes.string.isRequired,
    })
  ).isRequired,
};

//--------------------------------------------------------------------------------------------------
const Missions = ({ missions }) => (
  <Fragment>
    {missions.map((mission) => <Mission key={mission._id} {...mission} />)}
  </Fragment>
);

Missions.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number,
    })
  ).isRequired,
};

export default Missions;