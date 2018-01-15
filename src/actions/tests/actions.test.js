import * as actions from '../index';

describe('actions', () => {
  test('should create selectMission', () => {
    const expectedAction = { type: 'SELECT_MISSION', payload: { missionId: 10 } };
    expect(actions.selectMission(10)).toEqual(expectedAction);
  });
  test('should create removeMission', () => {
    const expectedAction = { type: 'REMOVE_MISSION', payload: { missionId: 10 } };
    expect(actions.removeMission(10)).toEqual(expectedAction);
  });
  test('should create removeSelectedMission', () => {
    const expectedAction = { type: 'REMOVE_SELECTED_MISSIONS' };
    expect(actions.removeSelectedMissions()).toEqual(expectedAction);
  });
});
