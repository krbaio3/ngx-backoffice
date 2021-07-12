import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryComponent } from './summary.component';
import { FilterMenuComponent } from '../../common/filter-menu/filter-menu.component';
import { ChartDetailComponent } from '../../core/chart-detail/chart-detail.component';
import { MediaMenuComponent } from './media-menu/media-menu.component';
import { DetailMonitoringComponent } from './detail-monitoring/detail-monitoring.component';
import { TableDetailComponent } from './table-detail/table-detail.component';
import { SummaryService } from './summary.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SummaryComponent', () => {
  let component: SummaryComponent;
  let fixture: ComponentFixture<SummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        SummaryComponent,
        FilterMenuComponent,
        ChartDetailComponent,
        MediaMenuComponent,
        DetailMonitoringComponent,
        TableDetailComponent
      ],
      providers: [SummaryService],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
