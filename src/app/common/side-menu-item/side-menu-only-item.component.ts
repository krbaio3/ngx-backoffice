/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MenuElement } from '../side-menu/menu-element';
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'cdk-side-menu-only-item',
  template: `
    <mat-nav-list fxLayout.xs="row">
      <a
        mat-list-item
        fxLayoutAlign.xs="center"
        role="link"
        [routerLink]="menu.link.toString()"
      >
        <!--      <a-->
        <!--        mat-list-item-->
        <!--        fxLayoutAlign.xs="center"-->
        <!--        role="link"-->
        <!--        [routerLink]="'/docs/{{menu.name.trim().toLowerCase()}}'"-->
        <!--      >-->
        <mat-icon mat-list-icon [attr.aria-label]="menu.name">{{
          menu.icon
        }}</mat-icon>
        <span
          *ngIf="!iconOnly"
          [ngStyle.gt-xs]="{ paddingLeft: '16px' }"
          data-testid="menu-name"
          >{{ menu.name }}</span
        >
      </a>
    </mat-nav-list>
  `,
  styleUrls: ['./side-menu-item.component.scss'],
})
export class SideMenuOnlyItemComponent {
  @Input()
  menu!: MenuElement;
  @Input()
  iconOnly: boolean = false;
}
