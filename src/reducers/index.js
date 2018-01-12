import { REMOVE_MISSION, SELECTED_MISSION, REMOVE_SELECTED_MISSION } from '../actions';

const removeMissionFromObject = (object, id) => {
  object.map((e, i) => {
    if (e.id === id) return object.splice(i, 1);
    return null;
  });
  return object;
};

const selectedMissionFromObject = (object, id) => {
  object.map(e => {
    if (e.id === id) return e.selected ? delete e.selected : (e.selected = true);
    return null;
  });
  return object;
};

const removeSelectedMissionFromObject = object => {
  return object.filter(e => e.selected !== true);
};

export default (state, action = {}) => {
  switch (action.type) {
    case REMOVE_MISSION:
      return { missions: [...removeMissionFromObject(state.missions, action.payload.missionId)] };
    case SELECTED_MISSION:
      return { missions: [...selectedMissionFromObject(state.missions, action.payload.missionId)] };
    case REMOVE_SELECTED_MISSION:
      return { missions: [...removeSelectedMissionFromObject(state.missions)] };
    default:
      return state;
  }
};
