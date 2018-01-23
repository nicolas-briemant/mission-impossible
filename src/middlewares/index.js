import { blockedAction } from '../actions';

export const logger = store => next => action => {
  console.group(action.type); // eslint-disable-line no-console
  console.log('actual state', store.getState()); // eslint-disable-line no-console
  console.log('payload:', action.payload); // eslint-disable-line no-console
  console.log('dispatching', action); // eslint-disable-line no-console
  const res = next(action);
  console.log('next state', store.getState()); // eslint-disable-line no-console
  console.groupEnd(action.type); // eslint-disable-line no-console
  return res;
};

export const firewall = () => next => action => {
  const FORBIDDEN_ACTION_TYPES = ['REMOVE_SELECTED_MISSIONS'];
  if (!FORBIDDEN_ACTION_TYPES.includes(action.type)) return next(action);
  return next(blockedAction(action.type));
};
