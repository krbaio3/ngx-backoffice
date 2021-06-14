import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  CurrentUser,
  NotificationBar,
  ToolbarHelpers,
} from './toolbar.helpers';
import { ToolbarService } from './toolbar.service';
import { forkJoin, Observable, of, Subscription } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'atm-toolbar',
  providers: [ToolbarService],
  template: `
    <mat-toolbar class="mat-elevation-z4">
      <button
        mat-icon-button
        (click)="sidenav.toggle(); drawer.toggle()"
        *ngIf="matDrawerShow"
      >
        <!-- Cambiar por el logo de empresa  -->
        <i class="material-icons app-toolbar-menu">menu </i>
      </button>
      <button mat-icon-button (click)="sidenav.toggle()" *ngIf="!matDrawerShow">
        <i class="material-icons app-toolbar-menu">menu </i>
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

      .main-toolbar {
        height: 64px;
        padding-left: 16px;
      }

      .more-btn {
        height: 100%;
        min-width: 70px;
      }

      .mat-icon-button {
        margin-right: 10px;
      }
      .spacer {
        width: 100%;
      }
    `,
  ],
})
export class ToolbarComponent implements OnInit, OnDestroy {
  @Input() sidenav: any;
  @Input() sidebar: any;
  @Input() drawer: any;
  @Input() matDrawerShow: any;

  searchOpen: boolean = false;
  toolbarHelpers: NotificationBar = ToolbarHelpers;

  currentUser: CurrentUser = { id: '', name: '', lastName: '', photoURL: '' };
  notification: Notification[] = [];

  private subscription1$: Subscription = new Subscription();
  private subscription2$: Subscription = new Subscription();

  constructor(private toolbarSrv: ToolbarService) {}

  ngOnInit() {
    this.callToGetUser();
    this.callToGetNotifications(this.currentUser.id);
  }

  callToGetUser() {
    this.subscription1$ = this.toolbarSrv
      .getToolbarUser()
      .pipe(
        catchError((error) => {
          console.error(`Error: ${error}`);
          return of({});
        }),
      )
      .subscribe((user) => {
        console.log(user as CurrentUser);
        this.currentUser = user as CurrentUser;
        // this.id = (user as CurrentUser).id;
      });
  }

  callToGetNotifications(id: string) {
    this.subscription2$ = this.toolbarSrv
      .getNotifications(id)
      .pipe(
        catchError((error) => {
          console.error(`Error: ${error}`);
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
  }
}
