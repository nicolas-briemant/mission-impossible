import React from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

const Missions = ({ datas }) => {
  const cpyDatas = datas;

  cpyDatas.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    clientId: PropTypes.string.isRequired,
    partnerId: PropTypes.string.isRequired,
    managerId: PropTypes.string.isRequired,
    addenda: PropTypes.arrayOf(
      PropTypes.shape({
        workerId: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };

  return (
    <div>
      {datas.map(data => (
        <ul key={data.id}>
          <li>id: {data.id} </li>
          <li>name: {data.name} </li>
          <li>clientId: {data.clientId} </li>
          <li>partnerId: {data.partnerId}</li>
          <li>managerId: {data.managerId}</li>
          <p>addenda longueur = {data.addenda.length}</p>
          {data.addenda.map(worker => (
            <ul key={uniqid()}>
              <li>{worker.workerId}</li>
            </ul>
          ))}
        </ul>
      ))}
    </div>
  );
};

Missions.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Missions;
