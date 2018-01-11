import { REMOVE_MISSION } from '../actions';

export default (state, action = {}) => {
  console.log(action)
  switch(action.type) {
    //case REMOVE_MISSION: return [...state.missions]; // return a copy, action.payload.missionId
    case REMOVE_MISSION:
      const index = state.missions.findIndex((mission) => mission.id === action.payload.missionId);
      const missions = [...state.missions];
      missions.splice(index, 1);
      return { ...state, missions };
    default: return state;
  }
};
