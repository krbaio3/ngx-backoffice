/* eslint-disable @angular-eslint/component-selector */
import {
  Component,
  OnInit,
  Input,
  HostListener,
  ElementRef,
} from '@angular/core';
import { ToolbarNotificationModel } from './toolbar-notification.model';
import { Notify } from '../../core/toolbar/toolbar.helpers';

@Component({
  selector: 'cdk-toolbar-notification',
  template: `
    <div class="toolbar-notification-container">
      <button
        mat-icon-button
        (click)="isOpen = !isOpen"
        [ngClass]="[cssPrefix + '-btn']"
        [class.open]="isOpen"
      >
        <mat-icon>notifications_none</mat-icon>
        <span
          class="badge"
          *ngIf="notifications && notifications?.length !== 0"
          >{{ notifications?.length }}</span
        >
      </button>

      <div
        class="dropdown mat-elevation-z4"
        [class.open]="isOpen"
        data-testid="card"
      >
        <div class="card">
          <div
            class="header"
            fxLayout="row"
            fxLayoutAlign="space-between center"
          >
            <div class="title">
              <div class="name">Notifications</div>
              <div class="extra">
                You have {{ notifications?.length }} new notifications
              </div>
            </div>
            <button type="button" mat-icon-button>
              <mat-icon class="icon">settings</mat-icon>
            </button>
          </div>
          <div
            *ngIf="notifications.length !== 0; then thenBlock; else elseBlock"
          ></div>
          <div class="footer" fxLayout="row" fxLayoutAlign="center center">
            <div class="action">
              <button
                mat-button
                type="button"
                aria-label="mark-all-read"
                (click)="markAsRead()"
                >Mark all as read</button
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <ng-template #thenBlock>
      <ng-scrollbar class="content" [ngStyle]="{ height: calcHeight() }">
        <div
          *ngFor="
            let notification of notifications;
            last as isLast;
            index as index
          "
        >
          <div
            class="notification"
            fxLayout="row"
            fxLayoutAlign="start center"
            mat-ripple
          >
            <mat-icon class="icon">notifications</mat-icon>
            <div class="title" fxLayout="column">
              <div class="name">{{ notification.title }}</div>
              <div class="time">{{ notification.lastTime }}</div>
            </div>
            <span fxFlex></span>
            <button
              type="button"
              mat-icon-button
              id="delete-notifications"
              (click)="delete(notification, index)"
            >
              <mat-icon class="close" [attr.aria-label]="'close'"
                >close</mat-icon
              >
            </button>
          </div>
          <div class="divider" *ngIf="!isLast"></div>
        </div>
      </ng-scrollbar>
    </ng-template>

    <ng-template #elseBlock>
      <div class="no" fxLayout="row" fxLayoutAlign="center center"
        >No hay notificaciones</div
      >
    </ng-template>
  `,
  styleUrls: ['./toolbar-notification.component.scss'],
})
export class ToolbarNotificationComponent {
  cssPrefix = 'toolbar-notification';
  isOpen: boolean = false;
  @Input() notifications: Notify[] = [];

  // @HostListener('document:click', ['$event', '$event.target'])
  // onClick(event: MouseEvent, targetElement: HTMLElement) {
  //     if (!targetElement) {
  //           return;
  //     }
  //     const clickedInside = this.elementRef.nativeElement.contains(targetElement);
  //     if (!clickedInside) {
  //          this.isOpen = false;
  //     }
  // }

  calcHeight() {
    return `${this.notifications.length * 65}px`;
  }

  constructor(private elementReference: ElementRef) {}

  select() {}

  delete(notify: ToolbarNotificationModel, index: number) {
    console.log('Has borrado:', notify);
    this.notifications = this.notifications.filter(
      (element) => element !== notify,
    );
  }
  markAsRead() {
    this.notifications = [];
  }
}
