import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { Button } from '@blueprintjs/core';
import cx from 'classnames';
import glamorous from 'glamorous';
import moment from 'moment';

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
  marginTop: '10px',
  marginBottom: '10px',
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
    const { id, name, client, partner, addenda, manager, startDate, endDate } = mission;
    if (count <= 0) {
      const noMission = (
        <MyDivCont>
          <p> No mission </p>
        </MyDivCont>
      );
      return noMission;
    }
    const today = moment().subtract(1, 'days');
    const isWip = endDate < today;

    const cls = cx({
      'pt-tag pt-intent-sucess': isWip,
      'pt-tag pt-intent-warning': !isWip,
    });

    return (
      <Fragment>
        <MyUlCont
          isHovered={this.state.isHovered}
          isSelected={selectedMissions[mission.id]}
          onMouseEnter={this.updateIsHovered}
          onMouseLeave={this.updateIsHovered}
        >
          <Mylist>Mission: {name} </Mylist>
          <Mylist>Client: {client.name} </Mylist>
          {partner ? <Mylist>Partner: {partner.name}</Mylist> : null}
          <Mylist>
            Manager : {manager.firstName} {manager.lastName}
          </Mylist>
          {addenda.map(({ worker }) => (
            <div key={uniqid()}>
              <Mylist>
                Worker: {worker.firstName} {worker.lastName}
              </Mylist>
            </div>
          ))}
          <Mylist>{startDate.format('LL')} </Mylist>
          <Mylist>{endDate ? `End Date: ${endDate.format('LL')}` : null} </Mylist>
          <Mylist className={cls}>{isWip ? 'Termined' : 'Work in progress...'}</Mylist>
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
