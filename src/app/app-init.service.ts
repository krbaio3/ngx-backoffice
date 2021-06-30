import { Injectable } from '@angular/core';
import { MenuElement } from './common/side-menu/menu-element';
import { HttpClient } from '@angular/common/http';
import {
  CurrentUser,
  currentUserInit,
} from './common/user-avatar/user-avatar.model';

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
  get sidenavMenu(): MenuElement[] {
    return [...this._sidenavMenu];
  }

  set sidenavMenu(value: MenuElement[]) {
    this._sidenavMenu = value;
  }

  private _sidenavMenu: MenuElement[] = [];

  private _userAvatarData: CurrentUser = currentUserInit;

  constructor(private $http: HttpClient) {}

  sidenavMenuLoad(): Promise<MenuElement[]> {
    console.log('AppInitService.sidenavMenu() called');
    return new Promise<MenuElement[]>((resolve, reject) => {
      return this.$http
        .get('assets/json/sidenav.json')
        .toPromise()
        .then((response: any) => {
          this.sidenavMenu = response.data;
          resolve(response.data);
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
          this._userAvatarData = response.data;
          resolve(response.data);
        });
    });
  }
}
