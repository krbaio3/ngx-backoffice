import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutDetailComponent } from './doughnut-detail.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ChartDetailComponent } from '../../../core/chart-detail/chart-detail.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { EmitterEventCanvas } from '../summary.model';

describe('DetailMonitoringComponent', () => {
  let component: DoughnutDetailComponent;
  let fixture: ComponentFixture<DoughnutDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ DoughnutDetailComponent, ChartDetailComponent ],
      imports: [MatTabsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test(`dataGroupMonitoring has default value`, () => {
    expect(component.dataGroupMonitoring).toEqual([]);
  });

  test('should show a console.log in terminal WHEN call handlerEmitDataSelect', async () => {
    // Arrange
    const spy = jest.spyOn(console, 'log');
    const event = jest.fn() as any as Event;

    // Act
    component.handlerEmitDataSelect(event)
    // Assert
    expect(spy).toHaveBeenCalled()
  });
  test('should show a console.log in terminal WHEN call handlerEmitClick', async () => {
    // Arrange
    const spy = jest.spyOn(console, 'log');
    const event = jest.fn() as any as EmitterEventCanvas;

    // Act
    component.handlerEmitClick(event)
    // Assert
    expect(spy).toHaveBeenCalled()
    });
  test('should show a console.log in terminal WHEN call handlerSelectTab', async () => {
    // Arrange
    const spy = jest.spyOn(console, 'log');

    // Act
    component.handlerSelectTab()
    // Assert
    expect(spy).toHaveBeenCalled()
  });

});
