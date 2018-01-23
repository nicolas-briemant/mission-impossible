import * as selectors from '../selectors';

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
  isSelected: true,
};

describe('selectors', () => {
  /*
  it('should get prepared workers', () => {

  });

  it('should get mission boundaries', () => {

  });

  it('should get enhanced missions', () => {

  });

  it('should get filtered missions', () => {

  });

  it('should get spotlighted missions', () => {

  });

  it('should get sorted missions', () => {

  });

  it('should get selected missions', () => {

  });
*/
  it('should get missions total count', () => {
    const state = { missions: { collection: {[mission1.id]: mission1, [mission2.id]: mission2} } };
    expect(selectors.getMissionTotalCount(state)).toEqual(2)
  });

  it('should get missions filtered/spotlighted count', () => {
    const state = { missions: { spotlight: 'aut', collection: {[mission1.id]: mission1, [mission2.id]: mission2} } };
    expect(selectors.getMissionSelectedCount(state)).toEqual(1)
  });

  it('should get missions selected count', () => {
    const state = { missions: { collection: {[mission1.id]: mission1, [mission2.id]: mission2} } };
    expect(selectors.getMissionSelectedCount(state)).toEqual(1)
  });
});