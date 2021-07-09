import {
  CurrentUser,
  currentUserInit,
} from './common/user-avatar/user-avatar.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SidenavModel } from './common/side-menu/sidenav.model';

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
    console.log('AppInitService.sidenavMenu() called');
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
    console.log('AppInitService.userAvatarLoad() called');
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
