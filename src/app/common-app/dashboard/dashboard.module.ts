import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, CoreModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
