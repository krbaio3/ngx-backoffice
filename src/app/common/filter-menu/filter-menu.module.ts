import { MatButtonModule } from '@angular/material/button';
import { SelectModule } from './../select/select.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilterMenuComponent } from './filter-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterMenuItemComponent } from './filter-menu-item/filter-menu-item.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { DatePickerRangeModule } from '../date-picker-range/date-picker-range.module';

@NgModule({
  declarations: [FilterMenuComponent, FilterMenuItemComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    FlexLayoutModule,
    DatePickerRangeModule,
    SelectModule,
    MatButtonModule,
  ],
  exports: [FilterMenuComponent, FilterMenuItemComponent],
})
export class FilterMenuModule {}
