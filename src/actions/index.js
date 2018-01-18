export const REMOVE_MISSION = 'REMOVE_MISSION';
export const removeMission = (missionId) => ({ type: REMOVE_MISSION, payload: { missionId } });

export const REMOVE_MISSIONS = 'REMOVE_MISSIONS';
export const removeMissions = () => ({ type: REMOVE_MISSIONS });

export const TOGGLE_MISSION = 'TOGGLE_MISSION';
export const toggleMission = (missionId) => ({ type: TOGGLE_MISSION, payload: { missionId } });

export const SHALL_NOT_PASS_LOG = 'SHALL_NOT_PASS_LOG';
export const shallNotPassLog = (actionType) => ({ type: SHALL_NOT_PASS_LOG, payload: { actionType } });

export const BALROG = 'BALROG';
export const balrog = () => ({ type: BALROG });
