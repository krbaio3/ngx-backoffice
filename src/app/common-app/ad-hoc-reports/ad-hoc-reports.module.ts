/* Angular Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

/* Custom Modules*/
import { AdHocReportsRoutingModule } from './ad-hoc-reports-routing.module';
import {
  AdHocScaffoldModule,
  BodyOptionsModule,
  SingleFieldModule,
} from '../../core';
import { DatePickerRangeModule, TitleRadioGroupModule } from '../../common';

/* Custom Components*/
import { AdHocReportsComponent } from './ad-hoc-reports.component';
import { AdditionalFiltersComponent } from './additional-filters/additional-filters.component';
import { DatesComponent } from './dates/dates.component';
import { PartiesComponent } from './parties/parties.component';
import { ProductComponent } from './product/product.component';
import { QueryDetailsComponent } from './query-details/query-details.component';
import { ReportTypeComponent } from './report-type/report-type.component';

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
