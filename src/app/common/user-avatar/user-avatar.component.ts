/* eslint-disable @angular-eslint/component-selector */
import { Component, Input } from '@angular/core';
import { CurrentUser } from '../../core/toolbar/toolbar.helpers';
import { currentUserInit } from './user-avatar.model';

@Component({
  selector: 'cdk-user-avatar',
  template: ` <div class="user_avatar__container" fxLayoutAlign="center">
    <span fxLayout="row" fxLayoutAlign="center center">
      <img
        class="avatar"
        [src]="currentUser.photoURL || 'assets/images/avatars/noavatar.png'"
        alt="avatar"
      />
      <span class="name" fxHide fxShow.gt-xs>{{
        currentUser.name + ' ' + currentUser.lastName || placeholder
      }}</span>
    </span>
  </div>`,
  styleUrls: ['./user-avatar.component.scss'],
})
export class UserAvatarComponent {
  @Input()
  placeholder = 'John Doe';

  @Input()
  currentUser: CurrentUser = currentUserInit;

  constructor() {}
}
