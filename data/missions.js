const missions = [
  {
    _id: '1',
    name: 'React Components',
    clientId: '566ac1d996de2706000c9484',
    managerId: '2',
    addenda: [
      {
        workerId: '6',
        startDate: '2015-10-31T23:00:00.000Z',
        endDate: '2016-05-31T23:00:00.000Z',
        currency: 'EUR',
        fees: { amount: 350, unit: 'day', currency: 'EUR' },
      },
      {
        workerId: '6',
        startDate: '2016-06-01T23:00:00.000Z',
        currency: 'EUR',
        fees: { amount: 420, unit: 'day', currency: 'EUR' },
      },

      {
        workerId: '5',
        startDate: '2015-10-31T23:00:00.000Z',
        currency: 'EUR',
        fees: { amount: 420, unit: 'day', currency: 'EUR' },
      },
      {
        workerId: '2',
        startDate: '2014-10-31T23:00:00.000Z',
        currency: 'EUR',
        fees: { amount: 520, unit: 'day', currency: 'EUR' },
      },
      {
        workerId: '1',
        startDate: '2017-04-11T23:00:00.000Z',
        endDate: '2017-07-11T23:00:00.000Z',
        currency: 'EUR',
        fees: { amount: 520, unit: 'day', currency: 'EUR' },
      },
    ],
  },
  {
    _id: '2',
    name: 'Groupagora',
    clientId: '566acaba96de2706000c9488',
    managerId: '1',
    addenda: [
      {
        workerId: '1',
        startDate: '2017-04-11T23:00:00.000Z',
        currency: 'EUR',
        fees: { amount: 520, unit: 'day', currency: 'EUR' },
      },
      {
        workerId: '3',
        startDate: '2017-03-11T23:00:00.000Z',
        currency: 'EUR',
        fees: { amount: 350, unit: 'day', currency: 'EUR' },
      },
      {
        workerId: '4',
        startDate: '2017-03-11T23:00:00.000Z',
        endDate: '2017-15-11T23:00:00.000Z',
        currency: 'EUR',
        fees: { amount: 0, unit: 'day', currency: 'EUR' },
      },
      {
        workerId: '4',
        startDate: '2017-16-11T23:00:00.000Z',
        currency: 'EUR',
        fees: { amount: 370, unit: 'day', currency: 'EUR' },
      },
    ],
  },
  {
    _id: '3',
    name: 'BFI',
    clientId: '566aef4496de2706000c9494',
    partnerid: '5671444574cd4006000b911c',
    managerId: '2',
    addenda: [
      {
        workerId: '7',
        startDate: '2018-01-11T23:00:00.000Z',
        currency: 'EUR',
        fees: { amount: 280, unit: 'day', currency: 'EUR' },
      },
      {
        workerId: '9',
        startDate: '2018-01-11T23:00:00.000Z',
        currency: 'EUR',
        fees: { amount: 280, unit: 'day', currency: 'EUR' },
      },
      {
        workerId: '10',
        startDate: '2018-01-11T23:00:00.000Z',
        currency: 'EUR',
        fees: { amount: 280, unit: 'day', currency: 'EUR' },
      },
      {
        workerId: '8',
        startDate: '2018-01-11T23:00:00.000Z',
        endDate: '2018-03-11T23:00:00.000Z',
        currency: 'EUR',
        fees: { amount: 280, unit: 'day', currency: 'EUR' },
      },
      {
        workerId: '8',
        startDate: '2018-03-12T23:00:00.000Z',
        currency: 'EUR',
        fees: { amount: 380, unit: 'day', currency: 'EUR' },
      },
    ],
  },
  {
    _id: '4',
    name: 'Graph satelites',
    clientId: '568a68c8c08f1907004483c8',
    partnerid: '568c153be355a707004f003c',
    managerId: '1',
    addenda: [
      {
        workerId: '7',
        startDate: '2017-01-11T23:00:00.000Z',
        endDate: '2018-01-11T23:00:00.000Z',
        currency: 'EUR',
        fees: { amount: 480, unit: 'day', currency: 'EUR' },
      },
    ],
  },
];

export default missions;
