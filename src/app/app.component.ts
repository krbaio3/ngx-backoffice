import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { AppInitService } from './app-init.service';
import { MenuElement } from './common/side-menu/menu-element';
import {
  currentUserInit,
  CurrentUser,
} from './common/user-avatar/user-avatar.model';

@Component({
  selector: 'atm-root',
  template: `
    <atm-toolbar [matDrawerShow]="matDrawerShow"></atm-toolbar>
    <atm-sidenav
      [sidenavMenuItems]="menuItems"
      [currentUser]="currentUser"
    ></atm-sidenav>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public matDrawerShow: boolean = true;
  public menuItems: MenuElement[] = [];
  public currentUser: CurrentUser = currentUserInit;

  constructor(
    private media: MediaObserver,
    private appInitSrv: AppInitService,
  ) {}

  ngOnInit() {
    this.media.asObservable().subscribe(() => {
      this.toggleView();
    });
    this.menuItems = this.appInitSrv.sidenavMenu;
    this.currentUser = this.appInitSrv.userAvatarData;
  }

  toggleView() {
    if (this.media.isActive('gt-md')) {
      this.matDrawerShow = true;
    } else if (this.media.isActive('gt-xs')) {
      this.matDrawerShow = true;
    } else if (this.media.isActive('lt-sm')) {
      this.matDrawerShow = false;
    }
  }
}
