import { removeMission, selectMission } from '..';

describe('src | actions', () => {
  describe('removeMission', () => {
    test('should object removeMission', () => {
      const expected = { type: 'REMOVE_MISSION', payload: { missionId: 10 } };
      expect(removeMission(10)).toEqual(expected);
    });
  });

  describe('selectMission', () => {
    test('should object selectMission', () => {
      const expected = { type: 'SELECT_MISSION', payload: { missionId: 10 } };
      expect(selectMission(10)).toEqual(expected);
    });
  });
});
