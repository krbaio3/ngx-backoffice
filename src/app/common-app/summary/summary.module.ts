/* Angular Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';

/* 3rd Modules */
import { TableModule } from '@atmira/pattern-lib';

/* Custom Modules*/
import { SummaryRoutingModule } from './summary-routing.module';
import { MediaItemModule, FilterMenuModule } from '../../common';
import { ChartDetailModule } from '../../core/chart-detail/chart-detail.module';
import { TableDetailModule } from '../../core/table-detail/table-detail.module';

/* Custom Components */
import { DoughnutDetailComponent } from './doughnut-detail/doughnut-detail.component';
import { MediaMenuComponent } from './media-menu/media-menu.component';
import { SummaryComponent } from './summary.component';

@NgModule({
  declarations: [SummaryComponent, MediaMenuComponent, DoughnutDetailComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FilterMenuModule,
    ChartDetailModule,
    TableModule,
    MediaItemModule,
    MatTabsModule,
    SummaryRoutingModule,
    TableDetailModule,
  ],
  exports: [SummaryComponent],
})
export class SummaryModule {}
