import {
  DataUserAccountAPI,
  UserAccountAPI,
} from '../../pods/account/user-account.api.model';

export const flushMock: DataUserAccountAPI = {
  data: {
    userDetails: {
      id: 1,
      userCode: 'REGIS01',
      job: 'Prueba de Job',
      name: 'Jorge Carballo Alonso',
      registrationDate: new Date(),
    },
    userAddress: {
      address: '742 de Evergreen Terrace',
      city: 'Springfield',
      postCode: '1024',
      country: 'USA',
      countryCode: 1,
    },
    userContact: {
      mainPhone: '766893733',
      alternativePhone: '',
      email: 'info@motorauto.es',
    },
  },
};

export const responseMock: UserAccountAPI = {
  userDetails: {
    id: 1,
    userCode: 'REGIS01',
    job: 'Prueba de Job',
    name: 'Jorge Carballo Alonso',
    registrationDate: new Date(),
  },
  userAddress: {
    address: '742 de Evergreen Terrace',
    city: 'Springfield',
    postCode: '1024',
    country: 'USA',
    countryCode: 1,
  },
  userContact: {
    mainPhone: '766893733',
    alternativePhone: '',
    email: 'info@motorauto.es',
  },
};
