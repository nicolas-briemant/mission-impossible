import {
  SELECT_MISSION,
  REMOVE_MISSION,
  REMOVE_SELECTED_MISSIONS,
  BLOCK_ACTION,
  TOOGLE_SORT_MISSIONS_BY_NAMES,
  SORT_MISSIONS_BY_NB_ADDENDAS,
} from '../actions';

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
      return { ...state, missions: select(state.missions, action.payload.missionId), blockedAction: undefined };
    case REMOVE_MISSION:
      return { ...state, missions: remove(state.missions, action.payload.missionId), blockedAction: undefined };
    case REMOVE_SELECTED_MISSIONS:
      return { ...state, missions: removeSelected(state.missions), blockedAction: undefined };
    case BLOCK_ACTION:
      return { ...state, blockedAction: action.payload.actionType };
    case TOOGLE_SORT_MISSIONS_BY_NAMES:
      return { ...state, filter: { type: action.type, order: !state.filter.order } };
    case SORT_MISSIONS_BY_NB_ADDENDAS:
      return { ...state, filter: { type: action.type, order: !state.filter.order } };
    default:
      return state;
  }
};
