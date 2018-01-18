import { blockedAction } from '../actions';

export const shallNotPass = () => (next) => (action) => {
  const FORBIDDEN_ACTION_TYPES = ['BIG_DRAGON'];

  if (!FORBIDDEN_ACTION_TYPES.includes(action.type)) return next(action);

  return next(blockedAction(action.type));
};

export const logger = ({ getState }) => (next) => (action) => {
  console.group(action.type);
  console.log('action:', action.type);
  console.log('payload:', action.payload);
  console.log('prevState:', getState());
  const res = next(action);
  console.log('nextState:', getState());
  console.groupEnd(action.type);
  return res;
}
