export const createStore = (reducer, initialState) => {
  let state = initialState;
  const listeners = [];
  const listen = (cb) => listeners.push(cb);
  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((cb) => cb(state));
    console.info('newState:', state); // eslint-disable-line no-console
    return action;
  };

  return { getState, dispatch, listen };
};
