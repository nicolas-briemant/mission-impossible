import deepfreeze from 'deep-freeze';
import reducer from '../../reducers';
import * as actions from '../../actions';

const mission1 = {
  id: 10,
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
  id: 11,
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

describe('reducer', () => {
  test('should return initialState', () => {
    const initialState = { missions: [mission1, mission2], people: [] };
    deepfreeze(initialState);
    expect(reducer(initialState)).toEqual(initialState);
  });
  test('should select a mission', () => {
    const initialState = { missions: [mission1, mission2], people: [] };
    const selectedMission2 = { ...mission2, isSelected: true };
    const expectedState = { missions: [mission1, selectedMission2], people: [] };
    expect(reducer(initialState, actions.selectMission(mission2.id))).toEqual(expectedState);
  });
  test('should unselect a mission', () => {
    const selectedMission2 = { ...mission2, isSelected: true };
    const initialState = { missions: [mission1, selectedMission2], people: [] };
    const unselectedMission2 = { ...mission2, isSelected: false };
    const expectedState = { missions: [mission1, unselectedMission2], people: [] };
    expect(reducer(initialState, actions.selectMission(mission2.id))).toEqual(expectedState);
  });
  test('should remove a mission', () => {
    const initialState = { missions: [mission1, mission2], people: [] };
    const expectedState = { missions: [mission1], people: [] };
    expect(reducer(initialState, actions.removeMission(mission2.id))).toEqual(expectedState);
  });
  test('should remove all selected missions', () => {
    const selectedMission1 = { ...mission2, isSelected: true };
    const selectedMission2 = { ...mission2, isSelected: true };
    const initialState = { missions: [selectedMission1, selectedMission2], people: [] };
    const expectedState = { missions: [], people: [] };
    expect(reducer(initialState, actions.removeSelectedMissions())).toEqual(expectedState);
  });
});
