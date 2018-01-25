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

export const SORT_MISSIONS = 'SORT_MISSIONS';
export const sortMissions = actionType => ({ type: SORT_MISSIONS, payload: { actionType } });

export const FILTER_MISSION_OPEN = 'FILTER_MISSION_OPEN';
export const filterMissionOpen = () => ({ type: FILTER_MISSION_OPEN });

export const FILTER_MISSION_END = 'FILTER_MISSION_END';
export const filterMissionEnd = () => ({ type: FILTER_MISSION_END });

export const CHANGE_ICON = 'CHANGE_ICON';
export const changeIcon = data => ({ type: CHANGE_ICON, iconElement: data });

export const REQUEST_ICON = 'REQUEST_ICON';
export const requestAction = () => dispatch => {
  fetch('https://hook.io/eric-basley/fruit​')
    .then(results => results.json())
    .then(data => {
      dispatch(changeIcon(data));
    });
  dispatch(changeIcon({ icon: 'spinner fa-spin', color: '' }));
};

export const SEARCH_BAR = 'SEARCH_BAR';
export const searchBar = string => ({ type: SEARCH_BAR, payload: { string } });
