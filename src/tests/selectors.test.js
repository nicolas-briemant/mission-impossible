import deepFreeze from 'deep-freeze';
import { getSortMissions } from '../selectors';

const mission1 = {
  id: 10,
  name: 'soluta aut quia',
  clientId: '568a68c8c08f1907004483c8',
  partnerId: '566acc3b96de2706000c948a',
  managerId: '4',
  endDate: '2016-10-18T06:49:24.047Z',
  startDate: '2018-01-02T16:10:41.312Z',
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
  endDate: '2016-10-18T06:49:24.047Z',
  startDate: '2018-02-02T16:10:41.312Z',

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

describe('selectors', () => {
  test('should return Missions SortedByName DESC', () => {
    const initialState = {
      missions: [mission1, mission2],
      nameIsSorted: true,
      endDateIsSorted: undefined,
      startDateIsSorted: undefined,
    };
    const expectedState = [mission2, mission1];
    deepFreeze(initialState);
    expect(
      getSortMissions(
        initialState.missions,
        initialState.nameIsSorted,
        initialState.endDateIsSorted,
        initialState.startDateIsSorted,
      ),
    ).toEqual(expectedState);
  });
  test('should return Missions SortedByName ASC', () => {
    const initialState = {
      missions: [mission1, mission2],
      nameIsSorted: false,
      endDateIsSorted: undefined,
      startDateIsSorted: undefined,
    };
    const expectedState = [mission1, mission2];
    deepFreeze(initialState);
    expect(
      getSortMissions(
        initialState.missions,
        initialState.nameIsSorted,
        initialState.endDateIsSorted,
        initialState.startDateIsSorted,
      ),
    ).toEqual(expectedState);
  });
  test('should return Missions SortedByStartDate DESC', () => {
    const initialState = {
      missions: [mission1, mission2],
      nameIsSorted: undefined,
      endDateIsSorted: undefined,
      startDateIsSorted: true,
    };
    const expectedState = [mission1, mission2];
    deepFreeze(initialState);
    expect(
      getSortMissions(
        initialState.missions,
        initialState.nameIsSorted,
        initialState.endDateIsSorted,
        initialState.startDateIsSorted,
      ),
    ).toEqual(expectedState);
  });
  test('should return Missions SortedByStartDate ASC', () => {
    const initialState = {
      missions: [mission1, mission2],
      nameIsSorted: undefined,
      endDateIsSorted: undefined,
      startDateIsSorted: false,
    };
    const expectedState = [mission2, mission1];
    deepFreeze(initialState);
    expect(
      getSortMissions(
        initialState.missions,
        initialState.nameIsSorted,
        initialState.endDateIsSorted,
        initialState.startDateIsSorted,
      ),
    ).toEqual(expectedState);
  });
  test('should return Missions SortedByEndDate DESC', () => {
    const initialState = {
      missions: [mission1, mission2],
      nameIsSorted: undefined,
      endDateIsSorted: true,
      startDateIsSorted: undefined,
    };
    const expectedState = [mission1, mission2];
    deepFreeze(initialState);
    expect(
      getSortMissions(
        initialState.missions,
        initialState.nameIsSorted,
        initialState.endDateIsSorted,
        initialState.startDateIsSorted,
      ),
    ).toEqual(expectedState);
  });
  test('should return Missions SortedByEndDate ASC', () => {
    const initialState = {
      missions: [mission1, mission2],
      nameIsSorted: undefined,
      endDateIsSorted: false,
      startDateIsSorted: undefined,
    };
    const expectedState = [mission2, mission1];
    deepFreeze(initialState);
    expect(
      getSortMissions(
        initialState.missions,
        initialState.nameIsSorted,
        initialState.endDateIsSorted,
        initialState.startDateIsSorted,
      ),
    ).toEqual(expectedState);
  });
});
