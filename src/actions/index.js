export const SELECT_MISSION = 'SELECT_MISSION';
export const selectMission = missionId => ({ type: SELECT_MISSION, payload: { missionId } });

export const REMOVE_MISSION = 'REMOVE_MISSION';
export const removeMission = missionId => ({ type: REMOVE_MISSION, payload: { missionId } });

export const REMOVE_SELECTED_MISSIONS = 'REMOVE_SELECTED_MISSIONS';
export const removeSelectedMissions = () => ({ type: REMOVE_SELECTED_MISSIONS });

export const BLOCK_ACTION = 'BLOCK_ACTION';
export const blockAction = actionType => ({ type: BLOCK_ACTION, payload: { actionType } });

export const TOOGLE_SORT_MISSIONS_BY_NAMES = 'TOOGLE_SORT_MISSIONS_BY_NAMES';
export const toogleSortMissionsByNames = actionType => ({
  type: TOOGLE_SORT_MISSIONS_BY_NAMES,
  payload: { actionType },
});

export const SORT_MISSIONS_BY_STARTDATE = 'SORT_MISSIONS_BY_STARTDATE';
export const sortMissionsByStartDate = actionType => ({ type: SORT_MISSIONS_BY_STARTDATE, payload: { actionType } });

export const SORT_MISSIONS_BY_ENDDATE = 'SORT_MISSIONS_BY_ENDDATE';
export const sortMissionsByEndDate = actionType => ({ type: SORT_MISSIONS_BY_ENDDATE, payload: { actionType } });

export const FILTER_MISSIONS_IN_PROGRESS = 'FILTER_MISSIONS_IN_PROGRESS';
export const filterMissionsInProgress = actionType => ({ type: FILTER_MISSIONS_IN_PROGRESS, payload: { actionType } });

export const FILTER_MISSIONS_ENDED = 'FILTER_MISSIONS_ENDED';
export const filterMissionsEnded = actionType => ({ type: FILTER_MISSIONS_ENDED, payload: { actionType } });
