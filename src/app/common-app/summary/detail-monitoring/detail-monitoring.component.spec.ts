import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMonitoringComponent } from './detail-monitoring.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ChartDetailComponent } from '../../../core/chart-detail/chart-detail.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DetailMonitoringComponent', () => {
  let component: DetailMonitoringComponent;
  let fixture: ComponentFixture<DetailMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ DetailMonitoringComponent, ChartDetailComponent ],
      imports: [MatTabsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`dataGroupMonitoring has default value`, () => {
    expect(component.dataGroupMonitoring).toEqual([]);
  });

});
