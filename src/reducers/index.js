import { REMOVE_MISSION } from '../actions';

const removeMissionFromObject = (object, id) => {
  object.map(e => {
    if (e.id === id) object.splice(e, 1);
    return object;
  });
  return object;
};

export default (state, action = {}) => {
  switch (action.type) {
    case REMOVE_MISSION:
      return { missions: [...removeMissionFromObject(state.missions, action.payload.missionId)] };

    default:
      return state;
  }
};
