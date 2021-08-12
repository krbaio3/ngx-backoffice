import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AdHocReportsComponent } from './ad-hoc-reports.component';
import { AdHocReportsService } from './ad-hoc-reports.service';
import { QueryDetailsComponent } from './query-details/query-details.component';
import { ReportTypeComponent } from './report-type/report-type.component';
import {
  additionalFiltersOptionsTemporal,
  checkboxOptionsTemporal, datesOptionsTemporal,
  frequencyTemporal,
  partyOptionsTemporal,
  productOptionsTemporal,
} from './api.temporal';
import { DatesComponent } from './dates/dates.component';
import { PartiesComponent } from './parties/parties.component';
import { ProductComponent } from './product/product.component';
import { AdditionalFiltersComponent } from './additional-filters/additional-filters.component';
import { AdHocScaffoldModule } from '../../core/ad-hoc-scaffold/ad-hoc-scaffold.module';
import { SingleFieldModule } from '../../core/single-field/single-field.module';
import { DatePickerRangeModule } from '../../common/date-picker-range/date-picker-range.module';
import { TitleRadioGroupModule } from '../../common';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AdHocReportsComponent', () => {
  let component: AdHocReportsComponent;
  let fixture: ComponentFixture<AdHocReportsComponent>;

  const adHocReportsServiceStub = () => ({
    getFrequency: () => ({ subscribe: (f: any) => frequencyTemporal }),
    getCheckboxOptions: () => ({ subscribe: (f: any) => checkboxOptionsTemporal }),
    getPartyOptions: () => ({ subscribe: (f: any) => partyOptionsTemporal }),
    getProductOptions: () => ({ subscribe: (f: any) => productOptionsTemporal }),
    getDateOptions: () => ({ subscribe: (f: any) => datesOptionsTemporal }),
    getAdditionalFiltersOptions: () => ({ subscribe: (f: any) => additionalFiltersOptionsTemporal })
  });

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        AdHocReportsComponent,
        AdditionalFiltersComponent,
        DatesComponent,
        PartiesComponent,
        ProductComponent,
        QueryDetailsComponent,
        ReportTypeComponent,
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MatInputModule,
        AdHocScaffoldModule,
        FlexLayoutModule,
        SingleFieldModule,
        DatePickerRangeModule,
        TitleRadioGroupModule,
        MatSelectModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: AdHocReportsService, useFactory: adHocReportsServiceStub }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdHocReportsComponent);
    component = fixture.componentInstance;
    // component.frequencies = frequencyTemporal;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
  test('should show "submit" in console WHEN call to onSubmit method', async () => {
    // Arrange
    const spy = jest.spyOn(console, 'log');

    // Act
    component.onSubmit();

    // Assert
    expect(spy).toHaveBeenCalledWith('Submit');
  });
});
