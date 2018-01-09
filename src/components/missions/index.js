import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, Classes, Colors } from '@blueprintjs/core';
import cx from 'classnames';
import glamorous, { H5 } from 'glamorous';
import { Header, HeaderLeft } from '../app';
import Status from './status';

//--------------------------------------------------------------------------------------------------
const StyledCard = glamorous(Card)({ margin: '10px 0', width: 300 });
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
const StyledContainer = glamorous.div({
  padding: 20,
});

const StyledMissions = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
});

const Missions = ({ missions }) => (
  <StyledContainer>
    <Header>
      <HeaderLeft>
        <Status count={missions.length} />
      </HeaderLeft>
    </Header>
    <StyledMissions>
      {missions.map((mission) => <Mission key={mission.id} {...mission} />)}
    </StyledMissions>
  </StyledContainer>
);

Missions.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number,
    })
  ).isRequired,
};

export default Missions;
