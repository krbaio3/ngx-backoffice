/* Angular Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* 3rd Modules */
import { TableModule } from '@atmira/pattern-lib';

/* Custom Components */
import { TableDetailComponent } from './table-detail.component';

@NgModule({
  declarations: [TableDetailComponent],
  imports: [CommonModule, TableModule],
  exports: [TableDetailComponent],
})
export class TableDetailModule {}
