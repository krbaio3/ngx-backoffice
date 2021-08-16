import { MainRoutingModule } from './main-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MainComponent } from './main.component';
import { SummaryModule } from './../../common-app/summary/summary.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    SummaryModule,
    MainRoutingModule,
  ],
  exports: [MainComponent],
})
export class MainModule {}
