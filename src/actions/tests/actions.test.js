import { removeMission, selectMission, removeSelectedMissions } from '..';

describe('actions', () => {
  test('should object removeMission', () => {
    const expected = { type: 'REMOVE_MISSION', payload: { missionId: 10 } };
    expect(removeMission(10)).toEqual(expected);
  });

  test('should object selectMission', () => {
    const expected = { type: 'SELECT_MISSION', payload: { missionId: 10 } };
    expect(selectMission(10)).toEqual(expected);
  });

  test('should object removeSelectedMissions', () => {
    const expected = { type: 'REMOVE_SELECTED_MISSIONS', payload: { selectedMissions: { 10: true, 11: true } } };
    const selectedMissions = { 10: true, 11: true };
    expect(removeSelectedMissions(selectedMissions)).toEqual(expected);
  });
});
