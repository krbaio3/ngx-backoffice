/* Angular Modules */
import { GuidesComponent } from './guides.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

/* Custom Modules */
import { AdHocScaffoldModule, InputSelectModule } from '../../core';
import { TableFilterModule } from '../../common';
import { GuidesRoutingModule } from './guides-routing.module';

@NgModule({
  declarations: [GuidesComponent],
  imports: [
    CommonModule,
    GuidesRoutingModule,
    AdHocScaffoldModule,
    FlexLayoutModule,
    InputSelectModule,
    TableFilterModule,
  ],
})
export class GuidesModule {}
