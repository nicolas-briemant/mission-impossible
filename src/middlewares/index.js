import { blockAction } from '../actions';

export const firewall = () => next => action => {
  const FORBIDDEN_ACTION_TYPES = ['BLOCK_ACTION'];

  if (!FORBIDDEN_ACTION_TYPES.includes(action.type)) return next(action);

  return next(blockAction(action.type));
};

export const logger = ({ getState }) => next => action => {
  console.group(action.type);
  // console.log('action:', action.type);
  // console.log('payload:', action.payload);
  if (action.type !== 'REMOVE_SELECTED_MISSIONS') {
    console.log('prevState:', getState().missions.filter(mission => mission.id === action.payload.missionId));
    const res = next(action);
    console.log('nextState:', getState().missions.filter(mission => mission.id === action.payload.missionId));
    return res;
  }
  console.log(getState().missions);
  const res = next(action);
  console.log(getState().missions);
  console.groupEnd(action.type);

  return res;
};
