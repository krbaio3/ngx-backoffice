import {
  Component,
  Input,
  HostListener,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { CurrentUser, currentUserInit } from '../user-avatar/user-avatar.model';
import { CommonService } from '../service/common.service';

@Component({
  /* eslint-disable @angular-eslint/component-selector */
  selector: 'cdk-user-menu',
  template: ` <div class="toolbar-user-container">
    <button
      mat-button
      (click)="isOpen = !isOpen"
      class="toolbar-user-btn"
      [class.open]="isOpen"
      [ngStyle.xs]="{ 'min-width': '70px' }"
    >
      <span fxLayout="row" fxLayoutAlign="start center">
        <img
          class="avatar"
          [src]="currentUser.photoURL || 'assets/images/avatars/noavatar.png'"
          alt="image"
        />
        <span class="name" fxHide fxShow.gt-xs>{{
          currentUser.name && currentUser.lastName
            ? currentUser.name + ' ' + currentUser.lastName
            : placeholder
        }}</span>
        <mat-icon class="icon" fxHide fxShow.gt-xs
          >keyboard_arrow_down</mat-icon
        >
      </span>
    </button>

    <div class="dropdown mat-elevation-z1" [class.open]="isOpen">
      <div class="content">
        <mat-nav-list>
          <mat-list-item>
            <a matLine>Profile</a>
            <button mat-icon-button>
              <mat-icon>account_circle</mat-icon>
            </button>
          </mat-list-item>
          <mat-list-item>
            <a matLine>Settings</a>
            <button mat-icon-button>
              <mat-icon>settings</mat-icon>
            </button>
          </mat-list-item>
          <mat-list-item>
            <a matLine>Help</a>
            <button mat-icon-button>
              <mat-icon>help</mat-icon>
            </button>
          </mat-list-item>

          <mat-divider></mat-divider>

          <mat-list-item>
            <a matLine>LogOut</a>
            <button mat-icon-button (click)="handlerClick()">
              <mat-icon>exit_to_app</mat-icon>
            </button>
          </mat-list-item>
        </mat-nav-list>
      </div>
    </div>
  </div>`,
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent {
  isOpen: boolean = false;

  @Input()
  public placeholder = 'John Doe';

  @Input()
  public currentUser: CurrentUser = currentUserInit;

  @HostListener('document:click', ['$event', '$event.target'])
  onClick(event: MouseEvent, targetElement: HTMLElement): void | undefined {
    if (!targetElement) {
      return;
    }
    const clickedInside =
      this.elementReference.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.isOpen = false;
    }
  }

  constructor(
    private elementReference: ElementRef,
    private commonSrv: CommonService,
  ) {}

  handlerClick() {
    this.commonSrv.emitUserMenuLogoutEvent(true);
  }
}
