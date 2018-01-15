import { removeMission, toggleMission, removeMissions } from '../actions';

describe('actions', () => {
  it('should remove mission', () => {
    const expectedAction = { type: 'REMOVE_MISSION', payload: { missionId: 1 } };
    expect(removeMission(1)).toEqual(expectedAction);
  });

  it('should toggle mission', () => {
    const expectedAction = { type: 'TOGGLE_MISSION', payload: { missionId: 1 } };
    expect(toggleMission(1)).toEqual(expectedAction);
  });

  it('should remove missions', () => {
    const expectedAction = { type: 'REMOVE_MISSIONS' };
    expect(removeMissions()).toEqual(expectedAction);
  });
});
