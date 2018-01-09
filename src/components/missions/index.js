import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import glamorous from 'glamorous';
import SearchBar from './search_bar';

const MyDivCont = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
});

const MyUlCont = glamorous.ul({
  width: '311px',
  margin: '10px',
  border: 'solid 1px black',
  padding: '0px',
});

const Mylist = glamorous.div({
  ':hover': {
    fontWeight: 'bold',
  },
  ':active': {
    color: 'red',
    position: 'relative',
  },
});

const Missions = ({ mission }) => {
  const count = mission.length;
  if (count <= 0) {
    return (
      <MyDivCont>
        <SearchBar name="nombre de mission" count={count} />
        <div>
          <p> No mission </p>
        </div>
      </MyDivCont>
    );
  }

  return (
    <div>
      <SearchBar name="nombre de mission" count={count} />
      <MyDivCont>
        {mission.map(({ id, name, clientId, partnerId, managerId, addenda }) => (
          <MyUlCont key={id} textAlign="left">
            <Mylist>id: {id} </Mylist>
            <Mylist>name: {name} </Mylist>
            <Mylist>clientId: {clientId} </Mylist>
            <Mylist>partnerId: {partnerId}</Mylist>
            <Mylist>managerId: {managerId}</Mylist>
            <Mylist>addenda longueur = {addenda.length}</Mylist>
            {addenda.map(({ workerId }) => (
              <div key={uniqid()}>
                <Mylist>workerId: {workerId}</Mylist>
              </div>
            ))}
          </MyUlCont>
        ))}
      </MyDivCont>
    </div>
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
