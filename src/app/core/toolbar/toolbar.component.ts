import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  CurrentUser,
  NotificationBar,
  ToolbarHelpers,
} from './toolbar.helpers';
import { ToolbarService } from './toolbar.service';
import { of, Subscription } from 'rxjs';
import { catchError, distinctUntilChanged, tap } from 'rxjs/operators';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SidenavService } from '../../common-app/sidenav/sidenav.service';
import { MediaChange, MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'atm-toolbar',
  providers: [ToolbarService],
  template: `
    <mat-toolbar class="mat-elevation-z4">
      <button
        mat-icon-button
        (click)="handlerButtonSidenav()"
        *ngIf="matDrawerShow"
        style="height: 32px; width: 100px"
      >
        <mat-icon
          svgIcon="business_logo"
          style="height: 32px; width: 100px"
        ></mat-icon>
      </button>

      <span class="spacer"></span>

      <button
        mat-icon-button
        (click)="searchOpen = !searchOpen"
        fxHide="true"
        [fxHide.gt-xs]="false"
      >
        <i class="material-icons">search</i>
      </button>
      <cdk-search-bar [open]="searchOpen"></cdk-search-bar>

      <cdk-fullscreen></cdk-fullscreen>

      <cdk-toolbar-notification
        [notifications]="toolbarHelpers.notifications"
      ></cdk-toolbar-notification>

      <cdk-user-menu [currentUser]="currentUser"></cdk-user-menu>

      <!--      <button mat-icon-button (click)="sidebar.toggle()">-->
      <!--        <i class="material-icons app-toolbar-menu">menu </i>-->
      <!--      </button>-->
    </mat-toolbar>
  `,
  styles: [
    `
      :host {
        z-index: 4;
      }
      .spacer {
        width: 100%;
      }
    `,
  ],
})
export class ToolbarComponent implements OnInit, OnDestroy {
  @Input() matDrawerShow: boolean = false;

  searchOpen: boolean = false;
  toolbarHelpers: NotificationBar = ToolbarHelpers;

  currentUser: CurrentUser = { id: '', name: '', lastName: '', photoURL: '' };
  notification: Notification[] = [];

  private subscription1$: Subscription = new Subscription();
  private subscription2$: Subscription = new Subscription();
  private subscription3$: Subscription = new Subscription();

  constructor(
    private media: MediaObserver,
    private sidenavSrv: SidenavService,
    private toolbarSrv: ToolbarService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon(
      `business_logo`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/logo-atmira.svg',
      ),
    );
  }

  ngOnInit() {
    this.subscription3$ = this.media
      .asObservable()
      .pipe(
        tap(console.log),
        distinctUntilChanged<MediaChange[]>(
          (anterior, actual) => anterior[0].mqAlias === actual[0].mqAlias,
        ),
      )
      .pipe(tap(console.log))
      .subscribe(async () => {
        await this.toggleView();
      });
    this.callToGetUser();
    this.callToGetNotifications(this.currentUser.id);
  }

  callToGetUser() {
    this.subscription1$ = this.toolbarSrv
      .getToolbarUser()
      .pipe(
        catchError((error) => {
          // console.error(`Error: ${error}`);
          return of({});
        }),
      )
      .subscribe((user) => {
        // console.log(user as CurrentUser);
        this.currentUser = user as CurrentUser;
        // this.id = (user as CurrentUser).id;
      });
  }

  callToGetNotifications(id: string) {
    this.subscription2$ = this.toolbarSrv
      .getNotifications(id)
      .pipe(
        catchError((error) => {
          // console.error(`Error: ${error}`);
          return of([]);
        }),
      )
      .subscribe(
        (notification) => (this.notification = notification as Notification[]),
      );
  }

  ngOnDestroy() {
    this.subscription1$.unsubscribe();
    this.subscription2$.unsubscribe();
    this.subscription3$.unsubscribe();
  }

  handlerButtonSidenav() {
    this.sidenavSrv.toggle();
  }

  public async toggleView() {
    if (this.media.isActive('gt-md')) {
      console.log('ToolbarComponent gt-md');
      await this.sidenavSrv.open();
    } else if (this.media.isActive('gt-xs')) {
      console.log('ToolbarComponent gt-xs');
      await this.sidenavSrv.open();
    } else if (this.media.isActive('lt-sm')) {
      console.log('ToolbarComponent lt-sm');
      await this.sidenavSrv.close();
    }
  }
}
