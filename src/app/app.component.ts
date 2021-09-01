import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { AppInitService } from './app-init.service';
import {
  currentUserInit,
  CurrentUser,
  SidenavModel,
  CommonService,
} from './common';
import { AuthAppService } from './auth/auth.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'atm-root',
  template: `
    <atm-toolbar
      [matDrawerShow]="matDrawerShow"
      [currentUser]="currentUser"
    ></atm-toolbar>
    <atm-sidenav
      [sidenavMenuItems]="menuItems"
      [currentUser]="currentUser"
    ></atm-sidenav>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public matDrawerShow: boolean = true;
  public menuItems: SidenavModel[] = [];
  public currentUser: CurrentUser = currentUserInit;

  constructor(
    private media: MediaObserver,
    private appInitSrv: AppInitService,
    private commonSrv: CommonService,
    private authAppService: AuthAppService,
  ) {}

  toggleView() {
    if (this.media.isActive('gt-md')) {
      this.matDrawerShow = true;
    } else if (this.media.isActive('gt-xs')) {
      this.matDrawerShow = true;
    } else if (this.media.isActive('lt-sm')) {
      this.matDrawerShow = false;
    }
  }

  ngOnInit() {
    this.media.asObservable().subscribe(() => {
      this.toggleView();
    });
    this.menuItems = this.appInitSrv.sidenavMenu;
    this.currentUser = this.appInitSrv.userAvatarData;
    this.commonSrv
      .userMenuLogoutEventListener()
      // .pipe(take(2))
      .subscribe((event) => {
        event && this.authAppService.logoutKeycloak();
      });
  }
}
