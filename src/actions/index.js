export const REMOVE_MISSION = 'REMOVE_MISSION';
export const TOGGLE_MISSION = 'TOGGLE_MISSION';
export const REMOVE_MISSIONS = 'REMOVE_MISSIONS';

export const removeMission = missionId => ({ type: REMOVE_MISSION, payload: { missionId } });
export const toggleMission = missionId => ({ type: TOGGLE_MISSION, payload: { missionId } });
export const removeMissions = () => ({ type: REMOVE_MISSIONS });
