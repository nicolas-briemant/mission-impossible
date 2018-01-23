import deepFreeze from 'deep-freeze';
import { filterMissions, sortMissions } from '../../selectors';

const mission1 = {
  id: 26,
  name: 'sequi facilis reprehenderit',
  clientId: '566aef4496de2706000c9494',
  partnerId: '566acc3b96de2706000c948a',
  managerId: '10',
  open: false,
  startDate: 1316631374,
  endDate: 1336631374,
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
  open: true,
  startDate: 1336631374,
  endDate: 1326631374,
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

const mission3 = {
  id: 21,
  name: 'recusandae suscipit repudiandae',
  clientId: '5682cc517696ba07003b3867',
  partnerId: '566acc3b96de2706000c948a',
  managerId: '8',
  open: true,
  startDate: 1326631374,
  endDate: 1316631374,
  addenda: [
    { workerId: '6', startDate: '2016-08-17T02:21:31.723Z', fees: { currency: 'EUR', amount: 457, unit: 'day' } },
    {
      workerId: '4',
      startDate: '2014-12-04T13:12:07.129Z',
      endDate: '2017-07-31T19:19:02.623Z',
      fees: { currency: 'EUR', amount: 247, unit: 'day' },
    },
    { workerId: '4', startDate: '2017-09-20T21:44:31.989Z', fees: { currency: 'EUR', amount: 330, unit: 'day' } },
    {
      workerId: '9',
      startDate: '2014-09-05T16:29:02.834Z',
      endDate: '2017-06-14T18:04:30.293Z',
      fees: { currency: 'EUR', amount: 425, unit: 'day' },
    },
    {
      workerId: '9',
      startDate: '2017-07-13T15:47:51.692Z',
      endDate: '2017-10-04T21:15:26.409Z',
      fees: { currency: 'EUR', amount: 232, unit: 'day' },
    },
    { workerId: '9', startDate: '2017-11-23T06:17:24.740Z', fees: { currency: 'EUR', amount: 406, unit: 'day' } },
    { workerId: '3', startDate: '2017-01-15T11:31:43.159Z', fees: { currency: 'EUR', amount: 285, unit: 'day' } },
  ],
};

describe('selectors', () => {
  it('should filter mission open', () => {
    const initialState = {
      missions: [mission1, mission2, mission3],
      filterMissions: { missionOpen: true, missionEnd: false },
    };
    const expected = [mission2, mission3];

    deepFreeze(initialState);
    expect(filterMissions(initialState, initialState.missions)).toEqual(expected);
  });

  it('should filter mission end', () => {
    const initialState = {
      missions: [mission1, mission2, mission3],
      filterMissions: { missionOpen: false, missionEnd: true },
    };
    const expected = [mission1];

    deepFreeze(initialState);
    expect(filterMissions(initialState, initialState.missions)).toEqual(expected);
  });

  it('should sort name mission', () => {
    const initialState = { missions: [mission1, mission2, mission3], sort: { type: 'SORT_NAME', direction: true } };
    const expected = [mission2, mission3, mission1];

    deepFreeze(initialState);
    expect(sortMissions(initialState.missions, initialState.sort)).toEqual(expected);
  });

  it('should sort name reverse mission', () => {
    const initialState = { missions: [mission1, mission2, mission3], sort: { type: 'SORT_NAME', direction: false } };
    const expected = [mission1, mission3, mission2];

    deepFreeze(initialState);
    expect(sortMissions(initialState.missions, initialState.sort)).toEqual(expected);
  });

  it('should sort start date mission', () => {
    const initialState = {
      missions: [mission1, mission2, mission3],
      sort: { type: 'SORT_DATE_START', direction: true },
    };
    const expected = [mission1, mission3, mission2];

    deepFreeze(initialState);
    expect(sortMissions(initialState.missions, initialState.sort)).toEqual(expected);
  });

  it('should sort start date reverse mission', () => {
    const initialState = {
      missions: [mission1, mission2, mission3],
      sort: { type: 'SORT_DATE_START', direction: false },
    };
    const expected = [mission2, mission3, mission1];

    deepFreeze(initialState);
    expect(sortMissions(initialState.missions, initialState.sort)).toEqual(expected);
  });

  it('should sort end date mission', () => {
    const initialState = { missions: [mission1, mission2, mission3], sort: { type: 'SORT_DATE_END', direction: true } };
    const expected = [mission3, mission2, mission1];

    deepFreeze(initialState);
    expect(sortMissions(initialState.missions, initialState.sort)).toEqual(expected);
  });

  it('should sort end date reverse mission', () => {
    const initialState = {
      missions: [mission3, mission2, mission1],
      sort: { type: 'SORT_DATE_END', direction: false },
    };
    const expected = [mission1, mission2, mission3];

    deepFreeze(initialState);
    expect(sortMissions(initialState.missions, initialState.sort)).toEqual(expected);
  });
});
