import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartDetailComponent } from './chart-detail.component';
import { ChartModule } from '@atmira/pattern-lib';

@NgModule({
  declarations: [ChartDetailComponent],
  imports: [CommonModule, ChartModule],
  exports: [ChartDetailComponent],
})
export class ChartDetailModule {}
