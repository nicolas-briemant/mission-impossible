export const REMOVE_MISSION = 'REMOVE_MISSION';
export const SELECT_MISSION = 'SELECT_MISSION';

// action
//export const removeMission = { type: REMOVE_MISSION, payload: { missionId: 1 } };

// action creator
export const removeMission = (missionId) => ({ type: REMOVE_MISSION, payload: { missionId } });
export const selectMission = (missionId) => ({ type: SELECT_MISSION, payload: { missionId } });
