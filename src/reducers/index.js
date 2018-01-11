import { REMOVE_MISSION, SELECT_MISSION } from '../actions';

export default (state, action = {}) => {
  console.log(action)
  switch(action.type) {
    //case REMOVE_MISSION: return [...state.missions]; // return a copy, action.payload.missionId
    case REMOVE_MISSION:
      const index = state.missions.findIndex((mission) => mission.id === action.payload.missionId);
      const missions = [...state.missions];
      missions.splice(index, 1);
      return { ...state, missions };
    case SELECT_MISSION:
      return { ...state, missions: state.missions.map((mission) => (
        mission.id === action.payload.missionId ? { ...mission, isSelected: true } : mission
      ))};
    default: return state;
  }
};
