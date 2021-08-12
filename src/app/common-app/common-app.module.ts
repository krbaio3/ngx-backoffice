import { SummaryModule } from './summary/summary.module';
import { ChartDetailModule } from '../core/chart-detail/chart-detail.module';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
/* Custom Modules/Components */
import { GuidesComponent } from './guides/guides.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
/* Angular Module/Components */
import { NgModule } from '@angular/core';
import { TableModule } from '@atmira/pattern-lib';
import { UserInformationModule } from './user-information/user-information.module';

@NgModule({
  declarations: [GuidesComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FlexModule,
    ChartDetailModule,
    MatTabsModule,
    MatTabsModule,
    TableModule,
    UserInformationModule,
    SummaryModule,
  ],
  exports: [GuidesComponent],
})
export class CommonAppModule {}
