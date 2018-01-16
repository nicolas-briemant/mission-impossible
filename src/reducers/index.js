import { REMOVE_MISSION, SELECT_MISSION, REMOVE_SELECTED_MISSIONS } from '../actions';

const findIndexMission = (missions, id) => missions.findIndex(mission => mission.id === id);

const remove = (missions, id) => {
  const idByIndex = findIndexMission(missions, id);
  return missions.filter((mission, index) => idByIndex !== index);
};

const removeMissionsSelected = (missions, selectedMissions) => {
  return missions.filter(mission => !selectedMissions[mission.id]);
};

export default (state, action = {}) => {
  const { payload: { missionId } = {} } = action;
  const toggle = state.selectedMissions[missionId];
  switch (action.type) {
    case REMOVE_MISSION:
      return { ...state, missions: remove(state.missions, missionId) };
    case SELECT_MISSION:
      if (state.selectedMissions[missionId])
        return { ...state, selectedMissions: { ...state.selectedMissions, [missionId]: !toggle } };
      return { ...state, selectedMissions: { ...state.selectedMissions, [missionId]: true } };
    case REMOVE_SELECTED_MISSIONS:
      return {
        ...state,
        missions: removeMissionsSelected(state.missions, state.selectedMissions),
        selectedMissions: {},
      };
    default:
      return state;
  }
};
