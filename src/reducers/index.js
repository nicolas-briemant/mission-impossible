import {
  SELECT_MISSION,
  REMOVE_MISSION,
  REMOVE_SELECTED_MISSIONS,
  BLOCK_ACTION,
  TOOGLE_SORT_MISSIONS_BY_NAMES,
  SORT_MISSIONS_BY_STARTDATE,
  SORT_MISSIONS_BY_ENDDATE,
  FILTER_MISSIONS_IN_PROGRESS,
  FILTER_MISSIONS_ENDED,
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
      return { ...state, order: { type: 'name', direction: !state.order.direction } };
    case SORT_MISSIONS_BY_STARTDATE:
      return { ...state, order: { type: 'startDate', direction: !state.order.direction } };
    case SORT_MISSIONS_BY_ENDDATE:
      return { ...state, order: { type: 'endDate', direction: !state.order.direction } };
    case FILTER_MISSIONS_IN_PROGRESS:
      return { ...state, filterMissions: { type: 'In progress' } };
    case FILTER_MISSIONS_ENDED:
      return { ...state, filterMissions: { type: 'Ended' } };

    default:
      return state;
  }
};
