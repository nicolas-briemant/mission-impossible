const companies = [
  {
    _id: '566abdf896de2706000c9481',
    name: 'redpelicans',
    type: 'tenant',
    website: 'http://redpelicans.com',
    address: {},
    avatar: {
      src:
        'data:image/png;base64,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',
      color: '#4285f4',
      type: 'src',
    },
    updatedAt: '2016-02-15T13:12:20.607Z',
    createdAt: '2015-12-11T12:13:44.608Z',
    tags: ['redpelicans', 'Test'],
  },
  {
    _id: '566ac1d996de2706000c9484',
    name: 'OECD',
    type: 'client',
    website: 'http://www.oecd.org/',
    address: {},
    avatar: {
      url: 'http://catalyst-fp7.eu/wp-content/uploads/2015/07/oecd-logo-tw_20140127115221960.png',
      color: '#d61a7f',
      type: 'color',
    },
    updatedAt: '2016-02-11T14:16:51.090Z',
    createdAt: '2015-12-11T12:30:17.969Z',
    tags: [],
  },
  {
    _id: '566acaba96de2706000c9488',
    name: 'Groupagora',
    type: 'partner',
    website: 'http://www.groupagora.fr',
    address: { street: '20 rue Joubert', zipcode: '75009', city: 'Paris', country: 'France' },
    avatar: { color: '#d61a7f', type: 'color' },
    updatedAt: '2015-12-11T13:08:10.633Z',
    createdAt: '2015-12-11T13:08:10.633Z',
    tags: ['Avocat'],
  },
  {
    _id: '566acc3b96de2706000c948a',
    name: 'Infocubed',
    type: 'partner',
    website: 'http://www.infocubed.com',
    address: { street: '103 rue du Cherche-Midi', zipcode: '75006', city: 'Paris', country: 'France' },
    avatar: { color: '#4285f4', type: 'color' },
    updatedAt: '2015-12-11T13:14:43.755Z',
    createdAt: '2015-12-11T13:14:35.964Z',
    tags: [],
  },
  {
    _id: '566aeb6596de2706000c9491',
    name: 'degetel',
    type: 'client',
    website: 'http://www.degetel.com',
    address: {
      street: '46, avenue de Général Leclerc',
      zipcode: '92100',
      city: 'Boulogne-Bilancourt',
      country: 'France',
    },
    avatar: {
      src:
        'data:image/png;base64,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',
      color: '#d73d32',
      type: 'src',
    },
    updatedAt: '2015-12-11T15:37:21.089Z',
    createdAt: '2015-12-11T15:27:33.999Z',
  },
  {
    _id: '566aef4496de2706000c9494',
    name: 'Société Générale',
    type: 'client',
    address: {},
    avatar: { color: '#CD4436', type: 'color' },
    updatedAt: '2015-12-11T15:44:04.840Z',
    createdAt: '2015-12-11T15:44:04.840Z',
  },
  {
    _id: '5671444574cd4006000b911c',
    name: 'Adonys',
    type: 'partner',
    website: 'http://www.adonys.net',
    address: { street: '31 rue Etienne Marcel', zipcode: '75001', city: 'Paris', country: 'France' },
    avatar: { color: '#4285f4', type: 'color' },
    updatedAt: '2016-02-14T17:30:22.259Z',
    createdAt: '2015-12-16T11:00:21.608Z',
    tags: ['Test', 'avocat'],
  },
  {
    _id: '5682cc517696ba07003b3867',
    name: 'HIGHTEAM',
    type: 'partner',
    website: 'http://www.highteam.fr/',
    address: { street: '10, rue du Colisér', zipcode: '75008', city: 'Paris', country: 'France' },
    avatar: { color: '#67ae3f', type: 'color' },
    updatedAt: '2015-12-29T21:00:17.738Z',
    createdAt: '2015-12-29T18:09:21.980Z',
  },
  {
    _id: '568a68c8c08f1907004483c8',
    name: 'Oligos',
    type: 'partner',
    website: 'www.oligos.fr',
    address: {},
    avatar: { color: '#4285f4', type: 'color' },
    updatedAt: '2016-01-04T12:42:48.028Z',
    createdAt: '2016-01-04T12:42:48.028Z',
  },
  {
    _id: '568c153be355a707004f003c',
    name: 'Skillwise',
    type: 'partner',
    website: 'http://www.skillwise.fr/',
    address: {},
    avatar: {
      url: 'http://www.skillwise.fr/bundles/front/img/logo-skillwise-mobile.png',
      color: '#4285f4',
      type: 'url',
    },
    updatedAt: '2016-02-29T10:24:19.304Z',
    createdAt: '2016-01-05T19:10:51.626Z',
    tags: [],
  },
  {
    _id: '568e664eaf96db07008ae1f1',
    name: 'Hays',
    type: 'partner',
    website: 'http://hays.fr/',
    address: {},
    avatar: { color: '#d61a7f', type: 'color' },
    updatedAt: '2016-01-07T13:21:18.527Z',
    createdAt: '2016-01-07T13:21:18.527Z',
    tags: ['Avocat'],
  },
  {
    _id: '568f6b3faf96db07008ae1f3',
    name: 'Neexium',
    type: 'partner',
    website: 'http://www.neexium.com/',
    address: {},
    avatar: { color: '#CD4436', type: 'color' },
    updatedAt: '2016-01-08T07:54:39.951Z',
    createdAt: '2016-01-08T07:54:39.951Z',
  },
  {
    _id: '56937dcaaf96db07008ae1f5',
    name: 'Emagine Consulting',
    type: 'partner',
    website: 'http://www.emagine.org/fr',
    address: { street: '6-8 Boulevard Pesaro', zipcode: '92000', city: 'Nanterre', country: 'France' },
    avatar: { color: '#ff4080', type: 'color' },
    updatedAt: '2016-01-11T10:03:52.683Z',
    createdAt: '2016-01-11T10:02:50.303Z',
  },
  {
    _id: '5697598caf96db07008ae1f7',
    name: 'InfoLink',
    type: 'partner',
    website: 'http://www.1folink.com/',
    address: {
      street: '103, avenue Charles de Gaulle',
      zipcode: '92200',
      city: 'Neuilly sur Seine',
      country: 'France',
    },
    avatar: { color: '#CD4436', type: 'color' },
    updatedAt: '2016-01-14T08:17:16.484Z',
    createdAt: '2016-01-14T08:17:16.484Z',
  },
  {
    _id: '56c705cef3877e012d89e3ed',
    name: 'Hello World Company',
    type: 'client',
    address: {},
    avatar: { color: '#CD4436', type: 'color' },
    tags: ['Special'],
    createdAt: '2016-02-19T12:08:46.054Z',
  },
];

export default companies;