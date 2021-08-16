import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SummaryComponent } from './summary.component';
import { FilterMenuComponent } from '../../common/filter-menu/filter-menu.component';
import { ChartDetailComponent } from '../../core/chart-detail/chart-detail.component';
import { MediaMenuComponent } from './media-menu/media-menu.component';
import { DoughnutDetailComponent } from './doughnut-detail/doughnut-detail.component';
import { TableDetailComponent } from './table-detail/table-detail.component';
import { SummaryService } from './summary.service';
import { EmitterEventCanvas } from './summary.model';

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
        DoughnutDetailComponent,
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

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Chart Summary specs', () => {
    test('should be true showTableDetail variable WHEN call to handlerEmitterEventCanvas', async () => {
      // Arrange
      const spy = jest.spyOn(component, 'handlerEmitterEventCanvas');
      const valueInit = component.showTableDetail;
      const argument = jest.fn() as any as EmitterEventCanvas

      // Act
      component.handlerEmitterEventCanvas(argument)
      fixture.detectChanges(true);
      const valueFinish = component.showTableDetail;

      // Assert
      expect(spy).toHaveBeenCalledWith(argument);
      expect(valueInit).toBeFalsy();
      expect(valueFinish).toBeTruthy();
    });
  });
});
