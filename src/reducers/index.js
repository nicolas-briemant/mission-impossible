import { SELECT_MISSION, REMOVE_MISSION, REMOVE_SELECTED_MISSIONS, BLOCK_ACTION } from '../actions';

const select = (missions, id) => {
  return missions.map(mission => {
    return mission.id === id ? { ...mission, isSelected: !mission.isSelected } : mission;
  });
};

const remove = (missions, id) => {
  return missions.filter(mission => mission.id !== id);
};

const removeSelected = missions => {
  return missions.filter(mission => !mission.isSelected);
};

export default (state, action = {}) => {
  switch (action.type) {
    case SELECT_MISSION:
      return { ...state, missions: select(state.missions, action.payload.missionId) };
    case REMOVE_MISSION:
      return { ...state, missions: remove(state.missions, action.payload.missionId) };
    case REMOVE_SELECTED_MISSIONS:
      return { ...state, missions: removeSelected(state.missions) };
    case BLOCK_ACTION:
      return { ...state, blockAction: action.payload.actionType };
    default:
      return state;
  }
};
