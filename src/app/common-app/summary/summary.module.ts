/* Angular Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';

/* 3rd Modules */
import { TableModule } from '@atmira/pattern-lib';

/* Custom Modules*/
import { SummaryRoutingModule } from './summary-routing.module';
import { MediaItemModule } from './../../common/media-item/media-item.module';
import { ChartDetailModule } from './../../core/chart-detail/chart-detail.module';
import { FilterMenuModule } from './../../common/filter-menu/filter-menu.module';

/* Custom Components */
import { TableDetailComponent } from './table-detail/table-detail.component';
import { DoughnutDetailComponent } from './doughnut-detail/doughnut-detail.component';
import { MediaMenuComponent } from './media-menu/media-menu.component';
import { SummaryComponent } from './summary.component';

@NgModule({
  declarations: [
    SummaryComponent,
    MediaMenuComponent,
    DoughnutDetailComponent,
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
    SummaryRoutingModule,
  ],
  exports: [SummaryComponent],
})
export class SummaryModule {}
