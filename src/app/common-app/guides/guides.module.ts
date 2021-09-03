/* Angular Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

/* Custom Modules */
import { GuidesRoutingModule } from './guides-routing.module';
import { AdHocScaffoldModule, InputSelectModule } from '../../core';
import { TableFilterModule } from '../../common';

/* Custom Components */
import { GuidesComponent } from './guides.component';

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
