import { MatTabsModule } from '@angular/material/tabs';
import { MediaItemModule } from './../../common/media-item/media-item.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TableDetailComponent } from './table-detail/table-detail.component';
import { DetailMonitoringComponent } from './detail-monitoring/detail-monitoring.component';
import { MediaMenuComponent } from './media-menu/media-menu.component';
import { ChartDetailModule } from './../../core/chart-detail/chart-detail.module';
import { FilterMenuModule } from './../../common/filter-menu/filter-menu.module';
import { SummaryComponent } from './summary.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from '@atmira/pattern-lib';

//TODO: cambiar nombre a DetailMonitoringComponent => Doughnut-detail
@NgModule({
  declarations: [
    SummaryComponent,
    MediaMenuComponent,
    DetailMonitoringComponent,
    TableDetailComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FilterMenuModule,
    ChartDetailModule,
    TableModule,
    MediaItemModule,
    MatTabsModule,
  ],
  exports: [SummaryComponent],
})
export class SummaryModule {}
