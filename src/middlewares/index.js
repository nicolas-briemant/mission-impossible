import { blockAction } from '../actions';

export const firewall = () => next => action => {
  const FORBIDDEN_ACTION_TYPES = ['BLOCK_ACTION'];

  if (!FORBIDDEN_ACTION_TYPES.includes(action.type)) return next(action);

  return next(blockAction(action.type));
};

export const logger = ({ getState }) => next => action => {
  console.group(action.type);
  console.log('action:', action.type);
  console.log('payload:', action.payload);
  console.log('prevState:', getState());
  const res = next(action);
  console.log('nextState:', getState());
  console.groupEnd(action.type);
  return res;
};
