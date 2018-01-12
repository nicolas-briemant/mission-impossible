import { SELECT_MISSION, REMOVE_MISSION, REMOVE_SELECTED_MISSIONS } from '../actions';

const findIndexMission = (missions, id) => missions.findIndex(mission => mission.id === id);

const remove = (missions, id) => {
  const idByIndex = findIndexMission(missions, id);
  return missions.filter((mission, index) => idByIndex !== index);
};

export default (state, action = {}) => {
  switch (action.type) {
    case SELECT_MISSION:
      state.selected.push(action.payload);
      return state;
    case REMOVE_MISSION:
      return { ...state, missions: remove(state.missions, action.payload.missionId) };
    case REMOVE_SELECTED_MISSIONS:
      return state;
    default:
      return state;
  }
};
