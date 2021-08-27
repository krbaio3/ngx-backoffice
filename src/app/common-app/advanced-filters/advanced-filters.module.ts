import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedFiltersComponent } from './advanced-filters.component';
import { AdvancedFiltersRoutingModule } from './advanced-filters-routing.module';
import { QueryDetailsModule } from '../../core/query-details/query-details.module';
import { AdHocScaffoldModule } from '../../core';

@NgModule({
  declarations: [AdvancedFiltersComponent],
  imports: [
    CommonModule,
    AdvancedFiltersRoutingModule,
    QueryDetailsModule,
    AdHocScaffoldModule,
  ],
  exports: [AdvancedFiltersComponent],
})
export class AdvancedFiltersModule {}
