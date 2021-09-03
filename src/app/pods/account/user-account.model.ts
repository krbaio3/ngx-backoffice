export interface UserAccount {
  userDetails: UserDetails;
  userAddress: UserAddress;
  userContact: UserContact;
}

export interface UserDetails {
  id: number;
  userCode: string;
  job: string;
  name: string;
  registrationDate: string;
}

export interface UserAddress {
  address: string;
  city: string;
  postCode: string;
  country: string;
  countryCode: number;
}

export interface UserContact {
  mainPhone: string;
  alternativePhone: string;
  email: string;
}

export const createEmptyUserAccount = (): UserAccount => ({
  userDetails: {
    id: 0,
    userCode: '',
    job: '',
    name: '',
    registrationDate: '',
  },
  userAddress: {
    address: '',
    city: '',
    postCode: '',
    country: '',
    countryCode: 0,
  },
  userContact: {
    mainPhone: '',
    alternativePhone: '',
    email: '',
  },
});
