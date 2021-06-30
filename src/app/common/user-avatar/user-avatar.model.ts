export type CurrentUser = {
  photoURL: string;
  name: string;
  lastName: string;
  id: string;
};

export const currentUserInit: CurrentUser = {
  id: '',
  name: 'John',
  photoURL: '',
  lastName: 'Doe',
};

export const currentUserMock: CurrentUser = {
  id: '3',
  name: 'John',
  photoURL: 'www.avatar.es',
  lastName: 'Doe',
};
