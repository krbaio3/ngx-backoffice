export type CurrentUser = {
  photoURL: string;
  name: string;
  lastName: string;
  id: string;
};

export const currentUserInit: CurrentUser = {
  id: '',
  name: '',
  photoURL: '',
  lastName: '',
};

export const currentUserMock: CurrentUser = {
  id: '3',
  name: 'John',
  photoURL: 'www.avatar.es',
  lastName: 'Doe',
};
