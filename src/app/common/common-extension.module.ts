// TODO: Limpiar este módulo para que sólo tenga las dependencias comunes de los módulos de common

import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';

import { CommonModule } from '@angular/common';
import { DatePickerRangeModule } from './date-picker-range/date-picker-range.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
/* Angular Module/Components */
import { NgModule } from '@angular/core';
/* Three Party*/
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';
/* Custom Modules/Components */

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatListModule,
    ScrollingModule,
    NgScrollbarModule,
    RouterModule,
    MatChipsModule,
    MatExpansionModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSelectModule,
    DatePickerRangeModule,
  ],
})
export class CommonExtensionModule {}
