import { REMOVE_MISSION, TOGGLE_MISSION, REMOVE_MISSIONS, FILTER_ACTION, BLOCKED_ACTION, HIDE_ALERT } from '../actions';

const removeMissionFromArray = (missions, id) => {
  return missions.filter(mission => mission.id !== id);
};

const toggleMissionFromArray = (missions, id) => {
  return missions.map(mission => {
    return mission.id === id ? { ...mission, isSelected: !mission.isSelected } : mission;
  });
};

const removeMissionsFromArray = missions => {
  return missions.filter(e => e.isSelected !== true);
};

export default (state, action = {}) => {
  switch (action.type) {
    case REMOVE_MISSION:
      return { ...state, missions: removeMissionFromArray(state.missions, action.payload.missionId) };
    case TOGGLE_MISSION:
      return { ...state, missions: toggleMissionFromArray(state.missions, action.payload.missionId) };
    case REMOVE_MISSIONS:
      return { ...state, missions: removeMissionsFromArray(state.missions) };
    case FILTER_ACTION:
      return { ...state };
    case BLOCKED_ACTION:
      return { ...state, blockedAction: action.payload.actionType, showAlert: true };
    case HIDE_ALERT:
      return { ...state, showAlert: false };
    default:
      return state;
  }
};
