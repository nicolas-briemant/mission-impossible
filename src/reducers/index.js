import {
  REMOVE_MISSION,
  TOGGLE_MISSION,
  REMOVE_MISSIONS,
  BLOCKED_ACTION,
  SORT_BY_NAME,
  SORT_BY_ADDENDA,
} from '../actions';
import { sortByName, sortByAddenda } from '../selectors';
export default (state, action = {}) => {
  switch (action.type) {
    case REMOVE_MISSION: {
      const missions = state.missions.filter(mission => mission.id !== action.payload.missionId);
      return { ...state, missions };
    }
    case TOGGLE_MISSION: {
      return {
        ...state,
        missions: state.missions.map(
          mission =>
            mission.id === action.payload.missionId ? { ...mission, isSelected: !mission.isSelected } : { ...mission },
        ),
      };
    }
    case REMOVE_MISSIONS: {
      const selectedMissions = state.missions.filter(mission => !mission.isSelected);

      return { ...state, missions: selectedMissions };
    }
    case BLOCKED_ACTION: {
      return { ...state, blockedAction: action.payload.actionType, isClicked: true };
    }
    case SORT_BY_NAME: {
      return { ...state, missions: sortByName(state) };
    }
    case SORT_BY_ADDENDA: {
      return { ...state, missions: sortByAddenda(state) };
    }

    default:
      return state;
  }
};
