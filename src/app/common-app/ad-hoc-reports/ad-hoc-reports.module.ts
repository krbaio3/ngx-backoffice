import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdHocReportsComponent } from './ad-hoc-reports.component';
import { AdHocReportsRoutingModule } from './ad-hoc-reports-routing.module';
import { AdHocScaffoldModule } from '../../core/ad-hoc-scaffold/ad-hoc-scaffold.module';
import { AdditionalFiltersComponent } from './additional-filters/additional-filters.component';
import { BodyOptionsModule } from '../../core/body-options/body-options.module';
import { CommonModule } from '@angular/common';
import { DatePickerRangeModule } from '../../common/date-picker-range/date-picker-range.module';
import { DatesComponent } from './dates/dates.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { PartiesComponent } from './parties/parties.component';
import { ProductComponent } from './product/product.component';
import { QueryDetailsComponent } from './query-details/query-details.component';
import { ReportTypeComponent } from './report-type/report-type.component';
import { SingleFieldModule } from '../../core/single-field/single-field.module';
import { TitleRadioGroupModule } from '../../common/title-radio-group/title-radio-group.module';

@NgModule({
  declarations: [
    AdHocReportsComponent,
    QueryDetailsComponent,
    ReportTypeComponent,
    PartiesComponent,
    ProductComponent,
    DatesComponent,
    AdditionalFiltersComponent,
  ],
  imports: [
    CommonModule,
    AdHocReportsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    FlexModule,
    FlexLayoutModule,
    BodyOptionsModule,
    AdHocScaffoldModule,
    TitleRadioGroupModule,
    DatePickerRangeModule,
    SingleFieldModule,
    MatButtonModule,
  ],
  exports: [AdHocReportsComponent],
})
export class AdHocReportsModule {}
