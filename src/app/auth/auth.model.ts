export interface AuthObject {
  name: string;
  ownerStrategyName: string;
  createdAt: number;
  value: Value | string;
}

export interface Value {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  id_token: string;
  scope: string;
}
