import deepFreeze from 'deep-freeze';
import { removeMission, removeMissions, toggleMission } from '../actions';
import reducer from '../reducers';

const mission1 = {
  id: 26,
  name: 'sequi facilis reprehenderit',
  clientId: '566aef4496de2706000c9494',
  partnerId: '566acc3b96de2706000c948a',
  managerId: '10',
  addenda: [
    { workerId: '1', startDate: '2016-10-26T07:19:35.556Z', fees: { currency: 'EUR', amount: 441, unit: 'day' } },
    {
      workerId: '7',
      startDate: '2014-09-09T06:27:36.049Z',
      endDate: '2017-12-21T00:38:11.524Z',
      fees: { currency: 'EUR', amount: 268, unit: 'day' },
    },
    { workerId: '7', startDate: '2017-12-30T14:08:15.350Z', fees: { currency: 'EUR', amount: 192, unit: 'day' } },
    {
      workerId: '2',
      startDate: '2014-10-06T21:15:38.816Z',
      endDate: '2016-02-20T11:49:16.016Z',
      fees: { currency: 'EUR', amount: 437, unit: 'day' },
    },
    {
      workerId: '2',
      startDate: '2016-05-23T03:06:17.270Z',
      endDate: '2017-05-03T04:22:55.631Z',
      fees: { currency: 'EUR', amount: 233, unit: 'day' },
    },
    { workerId: '2', startDate: '2017-07-09T21:44:37.885Z', fees: { currency: 'EUR', amount: 366, unit: 'day' } },
    { workerId: '10', startDate: '2015-07-03T02:09:38.610Z', fees: { currency: 'EUR', amount: 374, unit: 'day' } },
  ],
};

const mission2 = {
  id: 83,
  name: 'incidunt qui modi',
  clientId: '566acc3b96de2706000c948a',
  managerId: '2',
  addenda: [
    {
      workerId: '6',
      startDate: '2014-10-31T15:33:13.988Z',
      endDate: '2016-11-27T16:54:41.755Z',
      fees: { currency: 'EUR', amount: 424, unit: 'day' },
    },
    {
      workerId: '6',
      startDate: '2017-03-17T17:09:02.830Z',
      endDate: '2017-05-25T15:48:12.476Z',
      fees: { currency: 'EUR', amount: 454, unit: 'day' },
    },
    { workerId: '6', startDate: '2017-09-18T09:20:09.394Z', fees: { currency: 'EUR', amount: 403, unit: 'day' } },
    { workerId: '7', startDate: '2017-09-25T04:47:31.086Z', fees: { currency: 'EUR', amount: 452, unit: 'day' } },
    { workerId: '8', startDate: '2014-06-12T12:07:11.830Z', fees: { currency: 'EUR', amount: 194, unit: 'day' } },
  ],
};

describe('reducer', () => {
  it('should initial state', () => {
    const initialState = { missions: [mission1, mission2], people: [] };

    deepFreeze(initialState);
    expect(reducer(initialState)).toEqual(initialState);
  });

  it('should remove_mission', () => {
    const initialState = { missions: [mission1, mission2], people: [] };
    const expected = { missions: [mission1], people: [] };

    deepFreeze(initialState);
    expect(reducer(initialState, removeMission(mission2.id))).toEqual(expected);
  });

  it('should remove_missions', () => {
    const selectedMission = { ...mission2, isSelected: true };
    const initialState = { missions: [mission1, selectedMission], people: [] };
    const expected = { missions: [mission1], people: [] };

    deepFreeze(initialState);
    expect(reducer(initialState, removeMissions())).toEqual(expected);
  });

  it('should toggle_mission', () => {
    const initialState = { missions: [mission1, mission2], people: [] };
    const selectedMission = { ...mission1, isSelected: true };
    const expected = { missions: [selectedMission, mission2], people: [] };

    deepFreeze(initialState);
    expect(reducer(initialState, toggleMission(mission1.id))).toEqual(expected);
  });
});
