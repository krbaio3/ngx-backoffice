import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CoreModule } from '../core/core.module';
import { SidenavModule } from '../common-app/sidenav/sidenav.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, CoreModule, SidenavModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
