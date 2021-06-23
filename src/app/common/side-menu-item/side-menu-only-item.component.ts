/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, ViewEncapsulation } from '@angular/core';
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'cdk-side-menu-only-item',
  template: `
    <mat-nav-list fxLayout.xs="row">
      <a mat-list-item fxLayoutAlign.xs="center">
        <mat-icon mat-list-icon>{{ menu.icon }}</mat-icon>
        <span *ngIf="!iconOnly" [ngStyle.gt-xs]="{ paddingLeft: '16px' }">{{
          menu.name
        }}</span>
      </a>
    </mat-nav-list>
  `,
  styleUrls: ['./side-menu-item.component.scss'],
})
export class SideMenuOnlyItemComponent {
  @Input()
  menu!: any;
  @Input()
  iconOnly: boolean = false;
}
