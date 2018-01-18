export const REMOVE_MISSION = 'REMOVE_MISSION';
export const removeMission = (missionId) => ({ type: REMOVE_MISSION, payload: { missionId } });

export const REMOVE_MISSIONS = 'REMOVE_MISSIONS';
export const removeMissions = () => ({ type: REMOVE_MISSIONS });

export const TOGGLE_MISSION = 'TOGGLE_MISSION';
export const toggleMission = (missionId) => ({ type: TOGGLE_MISSION, payload: { missionId } });

export const BLOCKED_ACTION = 'BLOCKED_ACTION';
export const blockedAction = (actionType) => ({ type: BLOCKED_ACTION, payload: { actionType } });

export const BIG_DRAGON = 'BIG_DRAGON';
export const bigDragon = () => ({ type: BIG_DRAGON });
