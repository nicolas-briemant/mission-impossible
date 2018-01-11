export const REMOVE_MISSION = 'REMOVE_MISSION';

// action
// export const removeMission = {type: REMOVE_MISSION, payload: { missionId }};

// action creator
export const removeMission = missionId => ({ type: REMOVE_MISSION, payload: { missionId } });
