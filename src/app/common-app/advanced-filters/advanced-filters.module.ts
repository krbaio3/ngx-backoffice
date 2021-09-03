/* Angular Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

/* Custom Modules */
import { AdvancedFiltersRoutingModule } from './advanced-filters-routing.module';
import { QueryDetailsModule, AdHocScaffoldModule } from '../../core';
import { TableFilterModule } from '../../common';

/* Custom Components */
import { AdvancedFiltersComponent } from './advanced-filters.component';

@NgModule({
  declarations: [AdvancedFiltersComponent],
  imports: [
    CommonModule,
    AdvancedFiltersRoutingModule,
    QueryDetailsModule,
    AdHocScaffoldModule,
    TableFilterModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  exports: [AdvancedFiltersComponent],
})
export class AdvancedFiltersModule {}
