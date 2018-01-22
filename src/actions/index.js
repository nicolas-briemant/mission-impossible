export const REMOVE_MISSION = 'REMOVE_MISSION';
export const TOGGLE_MISSION = 'TOGGLE_MISSION';
export const REMOVE_MISSIONS = 'REMOVE_MISSIONS';

//action creator
export const removeMission = missionId => ({ type: REMOVE_MISSION, payload: { missionId } });

export const toggleMission = missionId => ({ type: TOGGLE_MISSION, payload: { missionId } });

export const removeMissions = () => ({ type: REMOVE_MISSIONS });

export const BLOCKED_ACTION = 'BLOCKED_ACTION';
export const blockedAction = actionType => ({ type: BLOCKED_ACTION, payload: { actionType } });

export const UN_AUTHORIZED = 'UN_AUTHORIZED';
export const unauthorized = () => ({ type: UN_AUTHORIZED });

export const SORT_BY_NAME = 'SORT_BY_NAME';
export const sortByName = () => ({ type: SORT_BY_NAME });

export const SORT_BY_START_DATE = 'SORT_BY_START_DATE';
export const sortByStartDate = () => ({ type: SORT_BY_START_DATE });

export const SORT_BY_END_DATE = 'SORT_BY_END_DATE';
export const sortByEndDate = () => ({ type: SORT_BY_END_DATE });
