/* Angular Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

/* Custom Modules */
import { FailsRoutingModule } from './fails-routing.module';
import { AdHocScaffoldModule, InputSelectModule } from '../../core';
import { TableFilterModule } from '../../common';

/* Custom Components */
import { FailsComponent } from './fails.component';

@NgModule({
  declarations: [FailsComponent],
  imports: [
    CommonModule,
    FailsRoutingModule,
    AdHocScaffoldModule,
    FlexLayoutModule,
    InputSelectModule,
    TableFilterModule,
  ],
})
export class FailsModule {}
