export const SELECT_MISSION = 'SELECT_MISSION';
export const REMOVE_MISSION = 'REMOVE_MISSION';
export const REMOVE_SELECTED_MISSIONS = 'REMOVE_SELECTED_MISSIONS';

// action
// export const removeMission = {type: REMOVE_MISSION, payload: { missionId }};

// action creator
export const selectMission = missionId => ({ type: SELECT_MISSION, payload: { missionId } });

export const removeMission = missionId => ({ type: REMOVE_MISSION, payload: { missionId } });

export const removeSelectedMissions = () => ({ type: REMOVE_SELECTED_MISSIONS });
