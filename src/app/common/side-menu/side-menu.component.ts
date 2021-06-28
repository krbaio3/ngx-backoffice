/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit, Input } from '@angular/core';
import { MenuElement } from './menu-element';
import { SideMenuService } from './side-menu.service';

@Component({
  selector: 'cdk-side-menu',
  template: `
    <div fxLayout="column">
      <cdk-side-menu-item
        *ngFor="let menu of menus"
        [menu]="menu"
        [iconOnly]="iconOnly"
        [ngStyle.xs]="{ width: '80px' }"
        [ngStyle.gt-xs]="{ width: '270px' }"
      >
      </cdk-side-menu-item>
    </div>
  `,
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  @Input()
  public iconOnly: boolean = false;
  public menus!: MenuElement[];

  constructor(private sideMenuSrv: SideMenuService) {}

  ngOnInit() {
    this.sideMenuSrv.getSideMenu().subscribe((data: MenuElement[]) => {
      this.menus = data;
    });
  }
}
