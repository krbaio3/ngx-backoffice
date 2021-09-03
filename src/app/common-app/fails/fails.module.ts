/* Angular Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

/* Custom Modules */
import { FailsRoutingModule } from './fails-routing.module';
import { AdHocScaffoldModule, InputSelectModule } from '../../core';
import { TableFilterModule } from '../../common';
import { ChartModule } from '@atmira/pattern-lib';

/* Custom Components */
import { FailsComponent } from './fails.component';
import { RankingListComponent } from './ranking-list/ranking-list.component';
import { TableLogsComponent } from './table-logs/table-logs.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WrapperTableComponent } from './table-logs/wrapper-table.component';

@NgModule({
  declarations: [
    FailsComponent,
    RankingListComponent,
    TableLogsComponent,
    WrapperTableComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    FailsRoutingModule,
    AdHocScaffoldModule,
    FlexLayoutModule,
    InputSelectModule,
    TableFilterModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatListModule,
    MatChipsModule,
    ChartModule,
    MatSortModule,
    MatTableModule,
  ],
})
export class FailsModule {}
