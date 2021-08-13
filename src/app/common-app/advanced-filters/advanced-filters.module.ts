import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedFiltersComponent } from './advanced-filters.component';
import { AdvancedFiltersRoutingModule } from './advanced-filters-routing.module';

@NgModule({
  declarations: [AdvancedFiltersComponent],
  imports: [CommonModule, AdvancedFiltersRoutingModule],
  exports: [AdvancedFiltersComponent],
})
export class AdvancedFiltersModule {}
