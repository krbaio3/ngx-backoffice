/* eslint-disable @angular-eslint/component-selector */
import { Component, Input } from '@angular/core';

import { SidenavModel } from '../side-menu/sidenav.model';

@Component({
  selector: 'cdk-side-menu-item',
  template: `
    <mat-accordion class="side_menu_item__container">
      <mat-list>
        <mat-list-item *ngIf="menu.name === ''" role="listitem">
          <span
            [ngStyle.xs]="{ textOverflow: 'ellipsis', overflow: 'hidden' }"
            data-testid="menu-title"
            >{{ menu.title }}</span
          >
        </mat-list-item>
        <mat-divider *ngIf="menu.name === ''"></mat-divider>
        <cdk-side-menu-accordion-item
          role="region"
          *ngIf="menu.sub && menu.name !== ''"
          [menu]="menu"
          [iconOnly]="iconOnly"
          class="side_menu_accordion_item__container"
        ></cdk-side-menu-accordion-item>
        <cdk-side-menu-only-item
          role="listitem"
          *ngIf="!menu.sub && menu.name !== ''"
          [menu]="menu"
          [iconOnly]="iconOnly"
          class="side_menu_only_item__container"
        ></cdk-side-menu-only-item>
      </mat-list>
    </mat-accordion>
  `,
  styleUrls: ['./side-menu-item.component.scss'],
})
export class SideMenuItemComponent {
  @Input() menu!: SidenavModel;
  @Input() iconOnly: boolean = false;

  constructor() {}
}
