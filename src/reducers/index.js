import { REMOVE_MISSION, REMOVE_MISSIONS, TOGGLE_MISSION } from '../actions';

export default (state, action = {}) => {
  switch(action.type) {
    case REMOVE_MISSION:
      return {
        ...state,
        missions: state.missions.filter((mission) => mission.id !== action.payload.missionId),
      };
    case REMOVE_MISSIONS:
      return {
        ...state,
        missions: state.missions.filter((mission) => !mission.isSelected),
      };
    case TOGGLE_MISSION:
      return {
        ...state,
        missions: state.missions.map(
          (mission) => (
            mission.id === action.payload.missionId
              ? { ...mission, isSelected: !mission.isSelected }
              : mission
          )
        )
      };
    default:
      return state;
  }
};
