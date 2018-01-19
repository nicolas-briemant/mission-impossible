export const REMOVE_MISSION = 'REMOVE_MISSION';
export const TOGGLE_MISSION = 'TOGGLE_MISSION';
export const REMOVE_MISSIONS = 'REMOVE_MISSIONS';

export const removeMission = missionId => ({ type: REMOVE_MISSION, payload: { missionId } });
export const toggleMission = missionId => ({ type: TOGGLE_MISSION, payload: { missionId } });
export const removeMissions = () => ({ type: REMOVE_MISSIONS });

export const BLOCKED_ACTION = 'BLOCKED_ACTION';
export const blockedAction = actionType => ({ type: BLOCKED_ACTION, payload: { actionType } });

export const HIDE_ALERT = 'HIDE_ALERT';
export const hideAlert = () => ({ type: HIDE_ALERT });

export const SORT_NAME = 'SORT_NAME';
export const sortName = () => ({ type: SORT_NAME });

export const SORT_ADDENDA = 'SORT_ADDENDA';
export const sortAddenda = () => ({ type: SORT_ADDENDA });
