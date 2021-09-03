export interface DataUserAccountAPI {
  data: UserAccountAPI;
}

export interface UserAccountAPI {
  userDetails: UserDetails;
  userAddress: UserAddress;
  userContact: UserContact;
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

export interface UserDetails {
  id: number;
  userCode: string;
  job: string;
  name: string;
  registrationDate: Date;
}
