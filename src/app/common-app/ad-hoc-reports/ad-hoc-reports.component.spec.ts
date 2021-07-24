import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdHocReportsComponent } from './ad-hoc-reports.component';
import { AdHocReportsService } from './ad-hoc-reports.service';
import { MatInputModule } from '@angular/material/input';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { QueryDetailsComponent } from './query-details/query-details.component';
import { ReportTypeComponent } from './report-type/report-type.component';

describe('AdHocReportsComponent', () => {
  let component: AdHocReportsComponent;
  let fixture: ComponentFixture<AdHocReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AdHocReportsComponent, QueryDetailsComponent, ReportTypeComponent],
      imports: [ReactiveFormsModule, FormsModule, MatInputModule],
      providers: [AdHocReportsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdHocReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
