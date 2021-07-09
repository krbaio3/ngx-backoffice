/* eslint-disable @angular-eslint/component-selector */
import { Component, Input } from '@angular/core';
import { MenuElement } from './menu-element';
import { SideMenuService } from './side-menu.service';

@Component({
  selector: 'cdk-side-menu',
  template: `
    <div fxLayout="column">
      <cdk-side-menu-item
        *ngFor="let menu of menuItems"
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
// implements OnInit
export class SideMenuComponent {
  @Input()
  public iconOnly: boolean = false;
  @Input()
  public menuItems!: MenuElement[];

  constructor(private sideMenuSrv: SideMenuService) {}

  // ngOnInit() {
  //   this.sideMenuSrv.getSideMenu().subscribe((data: MenuElement[]) => {
  //     this.menus = data;
  //   });
  // }
}
