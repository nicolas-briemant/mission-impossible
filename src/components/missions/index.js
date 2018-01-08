import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import glamorous from 'glamorous';
import { css } from 'glamor';

const anim = css.keyframes({
  '0%': { borderRadius: '0px' },
  '50%': { borderRadius: '50px' },
  '100%': { borderRadius: '0px' },
});

const MyUlCont = glamorous.ul({
  border: 'solid 1px black',
});

const Mylist = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  animation: `${anim} 1s infinite`,
  ':hover': {
    color: '#fff',
  },
  ':active': {
    color: 'white',
    position: 'relative',
  },
});

const Missions = ({ mission }) => {
  return (
    <glamorous.Div textalign="left">
      {mission.map(({ id, name, clientId, partnerId, managerId, addenda }) => (
        <MyUlCont key={id} textAlign="left">
          <Mylist>id: {id} </Mylist>
          <Mylist>name: {name} </Mylist>
          <Mylist>clientId: {clientId} </Mylist>
          <Mylist>partnerId: {partnerId}</Mylist>
          <Mylist>managerId: {managerId}</Mylist>
          <Mylist>addenda longueur = {addenda.length}</Mylist>
          {addenda.map(({ workerId }) => (
            <ul key={uniqid()}>
              <Mylist>workerId: {workerId}</Mylist>
            </ul>
          ))}
        </MyUlCont>
      ))}
    </glamorous.Div>
  );
};

Missions.propTypes = {
  mission: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      clientId: PropTypes.string.isRequired,
      partnerId: PropTypes.string,
      managerId: PropTypes.string.isRequired,
      addenda: PropTypes.arrayOf(
        PropTypes.shape({
          workerId: PropTypes.string.isRequired,
        }),
      ),
    }).isRequired,
  ),
};

export default Missions;
