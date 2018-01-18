import * as actions from '../actions';

describe('actions', () => {
  test('should remove a mission', () => {
    const expectedAction = { type: 'REMOVE_MISSION', payload: { missionId: 1 } };
    expect(actions.removeMission(1)).toEqual(expectedAction);
  });
  test('should remove  missions', () => {
    const expectedAction = { type: 'REMOVE_MISSIONS' };
    expect(actions.removeMissions()).toEqual(expectedAction);
  });
  test('should toggle a  mission', () => {
    const expectedAction = { type: 'TOGGLE_MISSION', payload: { missionId: 1 } };
    expect(actions.toggleMission(1)).toEqual(expectedAction);
  });
  test('should block an action', () => {
    const expectedAction = { type: 'UN_AUTHORIZED' };
    expect(actions.unauthorized()).toEqual(expectedAction);
  });
});
