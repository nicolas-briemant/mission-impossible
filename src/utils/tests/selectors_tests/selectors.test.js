import moment from 'moment';
import deepfreeze from 'deep-freeze';
import { selector } from '../../../selectors';
import companies from '../../../data/companies';
import workers from '../../../data/workers';

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
  ],
};

// const mission2 = {
//   id: 11,
//   name: 'laborum neque rerum',
//   clientId: '56c705cef3877e012d89e3ed',
//   partnerId: '5682cc517696ba07003b3867',
//   managerId: '4',
//   addenda: [
//     { workerId: '2', startDate: '2016-10-18T06:49:24.047Z', fees: { currency: 'EUR', amount: 217, unit: 'day' } },
//     {
//       workerId: '3',
//       startDate: '2015-04-18T21:28:53.237Z',
//       endDate: '2017-12-19T09:58:50.989Z',
//       fees: { currency: 'EUR', amount: 181, unit: 'day' },
//     },
//     { workerId: '3', startDate: '2018-01-02T16:10:41.312Z', fees: { currency: 'EUR', amount: 395, unit: 'day' } },
//     { workerId: '4', startDate: '2015-11-04T09:48:11.554Z', fees: { currency: 'EUR', amount: 433, unit: 'day' } },
//   ],
// };
//
// const mission3 = {
//   id: 12,
//   name: 'alias quia repudiandae',
//   clientId: '5697598caf96db07008ae1f7',
//   partnerId: '56c705cef3877e012d89e3ed',
//   managerId: '9',
//   addenda: [
//     {
//       workerId: '10',
//       startDate: '2016-05-17T23:04:46.301Z',
//       endDate: '2016-12-09T09:47:16.034Z',
//       fees: { currency: 'EUR', amount: 399, unit: 'day' },
//     },
//     { workerId: '10', startDate: '2017-03-20T18:08:25.955Z', fees: { currency: 'EUR', amount: 426, unit: 'day' } },
//     {
//       workerId: '5',
//       startDate: '2014-05-21T19:19:14.967Z',
//       endDate: '2017-04-18T20:26:21.032Z',
//       fees: { currency: 'EUR', amount: 499, unit: 'day' },
//     },
//     { workerId: '5', startDate: '2017-08-26T18:20:15.392Z', fees: { currency: 'EUR', amount: 217, unit: 'day' } },
//   ],
// };

describe('selectors', () => {
  test('should return a state reordered', () => {
    const initialState = {
      missions: [mission1],
      companies,
      workers,
      order: { type: undefined, direction: undefined },
      filterMissions: { type: undefined },
    };
    const expectedState = [
      {
        id: 10,
        name: 'soluta aut quia',
        client: {
          id: '568a68c8c08f1907004483c8',
          name: 'Oligos',
          type: 'partner',
          website: 'www.oligos.fr',
          address: {},
          avatar: { color: '#4285f4', type: 'color' },
          updatedAt: '2016-01-04T12:42:48.028Z',
          createdAt: '2016-01-04T12:42:48.028Z',
        },
        partner: {
          id: '566acc3b96de2706000c948a',
          name: 'Infocubed',
          type: 'partner',
          website: 'http://www.infocubed.com',
          address: { street: '103 rue du Cherche-Midi', zipcode: '75006', city: 'Paris', country: 'France' },
          avatar: { color: '#4285f4', type: 'color' },
          updatedAt: '2015-12-11T13:14:43.755Z',
          createdAt: '2015-12-11T13:14:35.964Z',
          tags: [],
        },
        manager: {
          id: '4',
          email: 'mehdi.aissa-brahim@redpelicans.com',
          avatar: {
            color: '#67ae3f',
          },
          roles: ['admin'],
          prefix: 'Mr',
          firstName: 'Mehdi',
          lastName: 'Aissa',
          type: 'worker',
          jobType: 'developer',
          companyId: '1',
          skills: ['Bootstrap', 'Docker', 'Mongodb', 'Nodejs', 'React'],
          phones: [
            {
              label: 'mobile',
              number: '06 11 80 99 16',
            },
          ],
        },
        workers: [
          {
            id: '5',
            email: 'dimitri.roncoli@redpelicans.com',
            avatar: {
              color: '#bdc3c7',
            },
            roles: ['access'],
            prefix: 'Mr',
            firstName: 'Dimitri',
            lastName: 'Roncoli',
            type: 'worker',
            jobType: 'developer',
            companyId: '1',
            skills: ['D3', 'Nodejs', 'React', 'Redux'],
            phones: [
              {
                label: 'mobile',
                number: '06 29 68 34 55',
              },
            ],
          },
        ],
        status: 'Ended',
        isSelected: undefined,
        startDate: moment('2014-09-16T19:47:14.920Z'),
        endDate: moment('2016-02-08T16:04:30.880Z'),
      },
    ];

    deepfreeze(initialState);
    expect(selector(initialState)).toEqual(expectedState);
  });
  // test('should sort by names Asc', () => {
  //   const initialState = {
  //     missions: [mission1, mission2, mission3],
  //     companies,
  //     workers,
  //     order: { type: undefined, direction: undefined },
  //     filterMissions: { type: undefined },
  //   };
  //   const expectedState = getMissionsDatas(initialState)
  //
  //   deepfreeze(initialState);
  //   expect(selector(initialState)).toEqual(expectedState);
  // })
  // test('should sort by names Desc', () => {
  //   const initialState = [mission1, mission2, mission3];
  // })
  // test('should sort by start date Asc', () => {
  //   const initialState = [mission1, mission2, mission3];
  // })
  // test('should sort by start date Desc', () => {
  //   const initialState = [mission1, mission2, mission3];
  // })
  // test('should sort by end date Asc', () => {
  //   const initialState = [mission1, mission2, mission3];
  // })
  // test('should sort by end date Desc', () => {
  //   const initialState = [mission1, mission2, mission3];
  // })
});
