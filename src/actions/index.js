export const REMOVE_MISSION = 'REMOVE_MISSION';
export const SELECTED_MISSION = 'SELECTED_MISSION';
export const REMOVE_SELECTED_MISSION = 'REMOVE_SELECTED_MISSION';

// action
// export const removeMission = { type: REMOVE_MISSION, payload: { missionId } };

// action creator
export const removeMission = missionId => ({ type: REMOVE_MISSION, payload: { missionId } });
export const selectedMission = missionId => ({ type: SELECTED_MISSION, payload: { missionId } });
export const removeSelectedMission = () => ({ type: REMOVE_SELECTED_MISSION });
// removeMission(3)
