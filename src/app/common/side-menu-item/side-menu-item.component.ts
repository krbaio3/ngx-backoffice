/* eslint-disable @angular-eslint/component-selector */
import { Component, Input, OnInit } from '@angular/core';
import { MenuElement } from '../side-menu/menu-element';

@Component({
  selector: 'cdk-side-menu-item',
  template: `
    <mat-accordion class="side_menu_item__container">
      <mat-list>
        <mat-list-item *ngIf="menu.name === ''">
          <span
            [ngStyle.xs]="{ textOverflow: 'ellipsis', overflow: 'hidden' }"
            >{{ menu.title }}</span
          >
        </mat-list-item>
        <mat-divider *ngIf="menu.name === ''"></mat-divider>
        <cdk-side-menu-accordion-item
          *ngIf="menu.sub && menu.name !== ''"
          [menu]="menu"
          [iconOnly]="iconOnly"
          class="side_menu_accordion_item__container"
        ></cdk-side-menu-accordion-item>
        <cdk-side-menu-only-item
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
export class SideMenuItemComponent implements OnInit {
  @Input() menu!: MenuElement;
  @Input() iconOnly: boolean = false;
  @Input() secondaryMenu = false;
  public name!: any;

  constructor() {}

  ngOnInit() {
    console.log('entra');
  }

  openLink() {
    console.log(this.menu.open);
    this.menu.open = !this.menu.open;
  }

  checkForChildMenu() {
    return !!(this.menu && this.menu?.sub);
  }
}
