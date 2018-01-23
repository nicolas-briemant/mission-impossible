import { blockAction } from '../actions';

export const firewall = () => next => action => {
  const FORBIDDEN_ACTION_TYPES = [''];

  if (!FORBIDDEN_ACTION_TYPES.includes(action.type)) return next(action);

  return next(blockAction(action.type));
};

export const logger = ({ getState }) => next => action => {
  console.group(action.type);
  // console.log('action:', action.type);
  // console.log('payload:', action.payload);
  if (action.type === 'SELECT_MISSION' || action.type === 'REMOVE_MISSION') {
    console.log('prevState:', getState().missions.filter(mission => mission.id === action.payload.missionId));
    const res = next(action);
    console.log('nextState:', getState().missions.filter(mission => mission.id === action.payload.missionId));
    console.groupEnd(action.type);
    return res;
  }
  console.log(getState().missions);
  const res = next(action);
  console.log(getState().missions);
  console.groupEnd(action.type);

  return res;
};
