/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, ViewEncapsulation } from '@angular/core';

import { SidenavModel } from '../side-menu/sidenav.model';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'cdk-side-menu-accordion-item',
  template: `
    <mat-expansion-panel
      (opened)="menu.open = true"
      (closed)="menu.open = false"
    >
      <mat-expansion-panel-header>
        <mat-panel-title fxLayout="row" fxLayoutAlign="center center">
          <mat-icon [attr.aria-label]="menu.name">{{ menu.icon }}</mat-icon>
          <span
            class="mat-subheading-2"
            style="flex-grow: 8; margin: 0; padding-left: 16px;"
            *ngIf="!iconOnly"
            data-testid="menu.name"
            >{{ menu.name }}
          </span>
          <mat-chip-list *ngIf="menu.chip && !iconOnly">
            <mat-chip>{{ menu.chip.value }} </mat-chip>
          </mat-chip-list>
        </mat-panel-title>
      </mat-expansion-panel-header>
      <mat-nav-list>
        <mat-list-item
          *ngFor="let sub of menu?.sub"
          [routerLink]="[sub.link]"
          fxLayout.xs="row"
          fxLayoutAlign.xs="center"
          role="link"
        >
          <mat-icon matListIcon [attr.aria-label]="sub.name"
            >{{ sub.icon }}
          </mat-icon>
          <h3 matLine *ngIf="!iconOnly">{{ sub.name }} </h3>
        </mat-list-item>
      </mat-nav-list>
    </mat-expansion-panel>
  `,
  styleUrls: ['./side-menu-item.component.scss'],
})
export class SideMenuAccordionItemComponent {
  @Input() menu!: SidenavModel;
  @Input() iconOnly: boolean = false;

  constructor() {}

  // openLink() {
  //   console.log(this.menu.open);
  //   this.menu.open = !this.menu.open;
  // }
}
