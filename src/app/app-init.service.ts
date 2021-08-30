import { CurrentUser, currentUserInit, SidenavModel } from './common';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppInitService {
  get userAvatarData(): CurrentUser {
    return { ...this._userAvatarData };
  }

  set userAvatarData(value: CurrentUser) {
    this._userAvatarData = value;
  }
  get sidenavMenu(): SidenavModel[] {
    return [...this._sidenavMenu];
  }

  set sidenavMenu(value: SidenavModel[]) {
    this._sidenavMenu = value;
  }

  private _sidenavMenu: SidenavModel[] = [];

  private _userAvatarData: CurrentUser = currentUserInit;

  constructor(private $http: HttpClient) {}

  sidenavMenuLoad(): Promise<SidenavModel[]> {
    return new Promise<SidenavModel[]>((resolve, reject) => {
      return this.$http
        .get('assets/json/sidenav.json')
        .toPromise()
        .then((response: any) => {
          this.sidenavMenu = response.data;
          resolve(response.data);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
  }

  userAvatarLoad(): Promise<CurrentUser> {
    return new Promise<CurrentUser>((resolve, reject) => {
      return this.$http
        .get('assets/json/user-avatar.json')
        .toPromise()
        .then((response: any) => {
          this.userAvatarData = response.data;
          resolve(response.data);
        })
        .catch((error) => {
          console.error(error);
          reject(error);
        });
    });
  }
}
