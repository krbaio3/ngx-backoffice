import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryDetailsComponent } from './query-details.component';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [QueryDetailsComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    FormsModule,
    FlexLayoutModule,
    MatNativeDateModule,
  ],
  exports: [QueryDetailsComponent],
})
export class QueryDetailsModule {}
