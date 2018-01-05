import React from 'react';
import { Mission3 } from './mission3';

const Mission1 = () => (
  <div>name: mission1, client: client1</div>
);

const Mission2 = () => (
  <div>name: mission2, client: client2</div>
);

const Missions = () => (
  <div>
    <Mission1 />
    <Mission2 />
    <Mission3 />
  </div>
);

export default Missions;
