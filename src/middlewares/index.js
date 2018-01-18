import { blockedAction } from '../actions';

export const firewall = () => next => action => {
  const FORBIDDEN_ACTION_TYPES = ['FILTER_ACTION'];

  if (!FORBIDDEN_ACTION_TYPES.includes(action.type)) return next(action);

  return next(blockedAction(action.type));
};

export const logger = ({ getState }) => next => action => {
  console.group(action.type); // eslint-disable-line no-console
  console.log('action:', action.type); // eslint-disable-line no-console
  console.log('payload:', action.payload); // eslint-disable-line no-console
  if (action.type === 'TOGGLE_MISSION') {
    console.group('Missions', action.payload.missionId, ':'); // eslint-disable-line no-console
    console.log('prevState :', ...getState().missions.filter(mission => mission.id === action.payload.missionId)); // eslint-disable-line no-console
    const res = next(action);
    console.log('nextState:', ...getState().missions.filter(mission => mission.id === action.payload.missionId)); // eslint-disable-line no-console
    console.groupEnd('Missions', action.payload.missionId, ':'); // eslint-disable-line no-console
    return res;
  }
  console.log('prevState:', getState()); // eslint-disable-line no-console
  const res = next(action);
  console.log('nextState:', getState()); // eslint-disable-line no-console
  console.groupEnd(action.type); // eslint-disable-line no-console
  return res;
};
