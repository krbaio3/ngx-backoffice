/* Custom Modules/Components */
import { GuidesComponent } from './guides/guides.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { StaticFieldComponent } from '../common/static-field/static-field.component';
import { SummaryComponent } from './summary/summary.component';
import { UserInformationComponent } from './user-information/user-information.component';
import { CommonExtensionModule } from '../common';

/* Angular Module/Components */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
import { MediaMenuComponent } from './summary/media-menu/media-menu.component';
import { DetailMonitoringComponent } from './summary/detail-monitoring/detail-monitoring.component';
import { ChartDetailModule } from '../core/chart-detail/chart-detail.module';
import { MatTabsModule } from '@angular/material/tabs';
import { TableDetailComponent } from './summary/table-detail/table-detail.component';
import { TableModule } from '@atmira/pattern-lib';

@NgModule({
  declarations: [
    GuidesComponent,
    SummaryComponent,
    UserInformationComponent,
    StaticFieldComponent,
    MediaMenuComponent,
    DetailMonitoringComponent,
    DetailMonitoringComponent,
    TableDetailComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    CommonExtensionModule,
    FlexModule,
    ChartDetailModule,
    MatTabsModule,
    MatTabsModule,
    TableModule,
  ],
  exports: [
    GuidesComponent,
    SummaryComponent,
    UserInformationComponent,
    StaticFieldComponent,
  ],
})
export class CommonAppModule {}
