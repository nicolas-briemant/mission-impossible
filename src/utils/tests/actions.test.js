import { removeMission, toggleMission, removeMissions, blockedAction, hideAlert } from '../../actions';

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

  it('should blocked action', () => {
    const expectedAction = { type: 'BLOCKED_ACTION', payload: { actionType: 'REMOVE_MISSION' } };
    expect(blockedAction('REMOVE_MISSION')).toEqual(expectedAction);
  });

  it('should hide alert', () => {
    const expectedAction = { type: 'HIDE_ALERT' };
    expect(hideAlert()).toEqual(expectedAction);
  });
});
