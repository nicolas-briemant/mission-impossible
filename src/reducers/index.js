import { REMOVE_MISSION, REMOVE_MISSIONS, TOGGLE_MISSION, SORT_MISSIONS } from '../actions';

export default (state, action = {}) => {
  switch(action.type) {
    case REMOVE_MISSION:
      return {
        ...state,
        missions: {
          ...state.missions,
          collection: state.missions.collection.filter((mission) => mission.id !== action.payload.missionId),
        },
      };
    case REMOVE_MISSIONS:
      return {
        ...state,
        missions: {
          ...state.missions,
          collection: state.missions.collection.filter((mission) => !mission.isSelected),
        },
      };
    case TOGGLE_MISSION:
      return {
        ...state,
        missions: {
          ...state.missions,
          collection: state.missions.collection.map(
            (mission) => (
              mission.id === action.payload.missionId
                ? { ...mission, isSelected: !mission.isSelected }
                : mission
            )
          )
        },
      };
    case SORT_MISSIONS:
      return {
        ...state,
        missions: {
          ...state.missions,
          sort: {
            type: action.payload.type,
            direction: state.missions.sort.type === action.payload.type
              ? !state.missions.sort.direction
              : true // initial sort direction
          },
        },
      };
    default:
      return state;
  }
};
