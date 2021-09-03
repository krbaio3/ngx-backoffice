import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDetailComponent } from './chart-detail.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { dataSetMock, labelChartMock } from '../../utils/test/mock-data';
import { EmitterEventCanvas } from '../../common-app/summary/summary.model';

describe('ChartComponent', () => {
  let component: ChartDetailComponent;
  let fixture: ComponentFixture<ChartDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ ChartDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartDetailComponent);
    component = fixture.componentInstance;
    component.labelChart = labelChartMock;
    component.dataset = dataSetMock;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('emitter specs', () => {
    test('should emit a event (EmitterEventCanvas) WHEN exec handlerEmitDataSelect function', async () => {
      // Arrange
      const spyEmit = jest.spyOn(component.emitClickCanvas, 'emit');
      const event = {
        originalEvent: jest.fn(),
        element: jest.fn(),
        dataset: jest.fn(),
      } as any as EmitterEventCanvas;

      // Act
      component.handlerEmitDataSelect(event);
      // Assert
      expect(spyEmit).toHaveBeenCalledTimes(1);
    });
  });
});
