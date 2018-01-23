import { REMOVE_MISSION, SELECT_MISSION, REMOVE_SELECTED_MISSIONS, BLOCKED_ACTION, MY_SORT_BY } from '../actions';

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
      return { ...state, missions: remove(state.missions, missionId), alert: '' };
    case SELECT_MISSION:
      if (state.selectedMissions[missionId])
        return { ...state, selectedMissions: { ...state.selectedMissions, [missionId]: !toggle }, alert: '' };
      return { ...state, selectedMissions: { ...state.selectedMissions, [missionId]: true }, alert: '' };
    case REMOVE_SELECTED_MISSIONS:
      return {
        ...state,
        missions: removeMissionsSelected(state.missions, state.selectedMissions),
        selectedMissions: {},
        alert: '',
      };
    case BLOCKED_ACTION:
      return { ...state, alert: `Access Denied ${action.payload.typeBlocked}` };
    case MY_SORT_BY:
      return { ...state, sort: { ...state.sort, type: action.payload.type, direction: !action.payload.direction } };
    default:
      return state;
  }
};
