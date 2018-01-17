import deepFreeze from 'deep-freeze';
import reducers from '..';
import * as actions from '../../actions';

const mission1 = {
  id: 1,
  name: 'soluta aut quia',
  clientId: '568a68c8c08f1907004483c8',
  partnerId: '566acc3b96de2706000c948a',
  managerId: '4',
  addenda: [
    {
      workerId: '5',
      startDate: '2014-09-16T19:47:14.920Z',
      endDate: '2016-02-08T16:04:30.880Z',
      fees: { currency: 'EUR', amount: 192, unit: 'day' },
    },
    { workerId: '5', startDate: '2017-05-09T01:26:37.729Z', fees: { currency: 'EUR', amount: 494, unit: 'day' } },
    { workerId: '3', startDate: '2017-02-09T23:22:53.535Z', fees: { currency: 'EUR', amount: 337, unit: 'day' } },
  ],
};

const mission2 = {
  id: 2,
  name: 'reprehenderit fugiat velit',
  clientId: '56c705cef3877e012d89e3ed',
  managerId: '2',
  addenda: [
    { workerId: '8', startDate: '2017-05-04T10:34:37.657Z', fees: { currency: 'EUR', amount: 272, unit: 'day' } },
    {
      workerId: '2',
      startDate: '2015-07-06T13:48:51.308Z',
      endDate: '2015-09-15T02:23:55.477Z',
      fees: { currency: 'EUR', amount: 454, unit: 'day' },
    },
    { workerId: '2', startDate: '2015-11-18T11:23:10.209Z', fees: { currency: 'EUR', amount: 411, unit: 'day' } },
    { workerId: '9', startDate: '2015-12-30T23:26:23.515Z', fees: { currency: 'EUR', amount: 352, unit: 'day' } },
  ],
};

const mission3 = {
  id: 3,
  name: 'laborum neque rerum',
  clientId: '56c705cef3877e012d89e3ed',
  partnerId: '5682cc517696ba07003b3867',
  managerId: '4',
  addenda: [
    { workerId: '2', startDate: '2016-10-18T06:49:24.047Z', fees: { currency: 'EUR', amount: 217, unit: 'day' } },
    {
      workerId: '3',
      startDate: '2015-04-18T21:28:53.237Z',
      endDate: '2017-12-19T09:58:50.989Z',
      fees: { currency: 'EUR', amount: 181, unit: 'day' },
    },
    { workerId: '3', startDate: '2018-01-02T16:10:41.312Z', fees: { currency: 'EUR', amount: 395, unit: 'day' } },
    { workerId: '4', startDate: '2015-11-04T09:48:11.554Z', fees: { currency: 'EUR', amount: 433, unit: 'day' } },
  ],
};

describe('src | reducers', () => {
  describe('reducers default', () => {
    test('should nothing change', () => {
      const initialState = { missions: [mission1, mission2], selectedMissions: {}, people: {}, alert: '' };
      deepFreeze(initialState);
      expect(reducers(initialState)).toEqual(initialState);
    });
  });

  describe('reducers REMOVEMISSION', () => {
    test('should remove mission1', () => {
      const initialState = { missions: [mission1, mission2, mission3], selectedMissions: {}, people: {}, alert: '' };
      const expected = { missions: [mission2, mission3], selectedMissions: {}, people: {}, alert: '' };
      deepFreeze(initialState);
      expect(reducers(initialState, actions.removeMission(mission1.id))).toEqual(expected);
    });

    test('should remove mission2', () => {
      const initialState = { missions: [mission1, mission2, mission3], selectedMissions: {}, people: {}, alert: '' };
      const expected = { missions: [mission1, mission3], selectedMissions: {}, people: {}, alert: '' };
      deepFreeze(initialState);
      expect(reducers(initialState, actions.removeMission(mission2.id))).toEqual(expected);
    });

    test('should remove mission3', () => {
      const initialState = { missions: [mission1, mission2, mission3], selectedMissions: {}, people: {}, alert: '' };
      const expected = { missions: [mission1, mission2], selectedMissions: {}, people: {}, alert: '' };
      deepFreeze(initialState);
      expect(reducers(initialState, actions.removeMission(mission3.id))).toEqual(expected);
    });
  });

  describe('reducers SELECTMISSION', () => {
    test('should select mission3', () => {
      const initialState = { missions: [mission1, mission2, mission3], selectedMissions: {}, people: {}, alert: '' };
      const expected = {
        missions: [mission1, mission2, mission3],
        selectedMissions: { 3: true },
        people: {},
        alert: '',
      };
      deepFreeze(initialState);
      expect(reducers(initialState, actions.selectMission(mission3.id))).toEqual(expected);
    });

    test('should select when mission 2 is select', () => {
      const initialState = {
        missions: [mission1, mission2, mission3],
        selectedMissions: { 1: true },
        people: {},
        alert: '',
      };
      const expected = {
        missions: [mission1, mission2, mission3],
        selectedMissions: { 1: true, 2: true },
        people: {},
        alert: '',
      };
      deepFreeze(initialState);
      expect(reducers(initialState, actions.selectMission(mission2.id))).toEqual(expected);
    });

    test('should select when mission 3 is select', () => {
      const initialState = {
        missions: [mission1, mission2, mission3],
        selectedMissions: { 1: true, 2: true },
        people: {},
        alert: '',
      };
      const expected = {
        missions: [mission1, mission2, mission3],
        selectedMissions: { 1: true, 2: true, 3: true },
        people: {},
        alert: '',
      };
      deepFreeze(initialState);
      expect(reducers(initialState, actions.selectMission(mission3.id))).toEqual(expected);
    });

    test('should unselect mission3', () => {
      const initialState = {
        missions: [mission1, mission2, mission3],
        selectedMissions: { 3: true },
        people: {},
        alert: '',
      };
      const expected = {
        missions: [mission1, mission2, mission3],
        selectedMissions: { 3: false },
        people: {},
        alert: '',
      };
      deepFreeze(initialState);
      expect(reducers(initialState, actions.selectMission(mission3.id))).toEqual(expected);
    });

    test('should unselect mission2 but mission1 rest', () => {
      const initialState = {
        missions: [mission1, mission2, mission3],
        selectedMissions: { 1: true, 2: true },
        people: {},
        alert: '',
      };
      const expected = {
        missions: [mission1, mission2, mission3],
        selectedMissions: { 1: true, 2: false },
        people: {},
        alert: '',
      };
      deepFreeze(initialState);
      expect(reducers(initialState, actions.selectMission(mission2.id))).toEqual(expected);
    });

    test('should unselect mission3 but mission1 and mission2 rest', () => {
      const initialState = {
        missions: [mission1, mission2, mission3],
        selectedMissions: { 1: true, 2: false, 3: true },
        people: {},
        alert: '',
      };
      const expected = {
        missions: [mission1, mission2, mission3],
        selectedMissions: { 1: true, 2: false, 3: false },
        people: {},
        alert: '',
      };
      deepFreeze(initialState);
      expect(reducers(initialState, actions.selectMission(mission3.id))).toEqual(expected);
    });
  });

  describe('reducers REMOVE_SELECTED_MISSIONS', () => {
    test('should remove missions2 and mission3', () => {
      const initialState = {
        missions: [mission1, mission2, mission3],
        selectedMissions: { 2: true, 3: true },
        people: {},
        alert: '',
      };
      const expected = { missions: [mission1], selectedMissions: {}, people: {}, alert: '' };
      deepFreeze(initialState);
      expect(reducers(initialState, actions.removeSelectedMissions(initialState.selectedMissions))).toEqual(expected);
    });
  });

  describe('reducers BLOCKED_ACTION', () => {
    test('should BLOCKED_ACTION by default', () => {
      const initialState = {
        missions: [mission1, mission2, mission3],
        selectedMissions: { 2: true, 3: true },
        people: {},
        alert: '',
      };
      const expected = {
        missions: [mission1, mission2, mission3],
        selectedMissions: { 2: true, 3: true },
        people: {},
        alert: 'Access Denied',
      };
      deepFreeze(initialState);
      expect(reducers(initialState, actions.blockedAction())).toEqual(expected);
    });
  });
});
