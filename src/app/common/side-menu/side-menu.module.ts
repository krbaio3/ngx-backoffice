import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { SideMenuComponent } from './side-menu.component';
import { SideMenuItemModule } from '../side-menu-item/side-menu-item.module';

@NgModule({
  declarations: [SideMenuComponent],
  imports: [CommonModule, FlexLayoutModule, SideMenuItemModule],
  exports: [SideMenuComponent],
})
export class SideMenuModule {}
