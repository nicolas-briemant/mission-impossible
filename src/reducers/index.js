import { REMOVE_MISSION } from '../actions';
import missions from '../data/missions2';

export default (state, action = {}) => {
  switch (action.type) {
    case REMOVE_MISSION:
      console.log(action);
      return state.missions.length === 1 ? { ...state, missions } : { ...state, missions: [missions[0]] }; // return a copy
    default:
      return state;
  }
};
