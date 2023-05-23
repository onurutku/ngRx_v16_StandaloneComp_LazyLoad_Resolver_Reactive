import Users from '../models/users.model';

export const _userMock: Users = {
  id: 11,
  name: 'Onur Utku Topaloğlu',
  email: 'topaloglu08@gmail.com',
  address: {
    street: 'Ergin St.',
    suite: 'Angün Apt.',
    city: 'Ankara',
    zipcode: '06580',
    geo: { lat: '123145123123', lng: '123124124' },
  },
  phone: '+905317304003',
  website: 'www.google.com',
  company: { name: 'orioninc', catchPhrase: 'string', bs: 'string' },
};
export const _updateUser: Users = {
  id: 1,
  name: 'Gonca Topaloğlu',
  email: 'topaloglu08@gmail.com',
  address: {
    street: 'Ergin St.',
    suite: 'Angün Apt.',
    city: 'Ankara',
    zipcode: '06580',
    geo: { lat: '123145123123', lng: '123124124' },
  },
  phone: '+905317304003',
  website: 'www.google.com',
  company: { name: 'orioninc', catchPhrase: 'string', bs: 'string' },
};
