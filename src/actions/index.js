export const REMOVE_MISSION = 'REMOVE_MISSION';
export const removeMission = missionId => ({ type: REMOVE_MISSION, payload: { missionId } });

export const SELECT_MISSION = 'SELECT_MISSION';
export const selectMission = missionId => ({ type: SELECT_MISSION, payload: { missionId } });

export const REMOVE_SELECTED_MISSIONS = 'REMOVE_SELECTED_MISSIONS';
export const removeSelectedMissions = selectedMissions => ({
  type: REMOVE_SELECTED_MISSIONS,
  payload: { selectedMissions },
});

export const BLOCKED_ACTION = 'BLOCKED_ACTION';
export const blockedAction = (typeBlocked = '') => ({ type: BLOCKED_ACTION, payload: { typeBlocked } });
