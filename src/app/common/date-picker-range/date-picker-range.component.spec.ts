import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerRangeComponent } from './date-picker-range.component';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DatePickerRangeComponent', () => {
  let component: DatePickerRangeComponent;
  let fixture: ComponentFixture<DatePickerRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ DatePickerRangeComponent ],
      imports: [
        MatDatepickerModule,
        ReactiveFormsModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatNativeDateModule,
        NoopAnimationsModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onInnerInputEventStart and onInnerInputEventEnd', () => {

    test('should emmit a event WHEN select to start day', async () => {
      // Arrange
      const spyOnInnerStart = jest.spyOn(component.dateInputEventStart, 'emit');
      const value= { value: new Date() };
      // Act
      component.onInnerInputEventStart(value as MatDatepickerInputEvent<unknown>);
      // Assert
      expect(spyOnInnerStart).toHaveBeenCalled();
    });

    test('should emmit a event WHEN select to end day', async () => {
      // Arrange
      const spyOnInnerEnd = jest.spyOn(component.dateInputEventEnd, 'emit');
      const value= { value: new Date() };
      // Act
      component.onInnerInputEventEnd(value as MatDatepickerInputEvent<unknown>);
      // Assert
      expect(spyOnInnerEnd).toHaveBeenCalled();
    });

  });

  describe('onInnerChangeEventStart and onInnerChangeEventEnd', () => {

    test('should emmit a event WHEN change to start day', async () => {
      // Arrange
      const spyOnChangeStart = jest.spyOn(component.dateChangeEventStart, 'emit');
      const value= { value: new Date() };
      // Act
      component.onInnerChangeEventStart(value as MatDatepickerInputEvent<unknown>);
      // Assert
      expect(spyOnChangeStart).toHaveBeenCalled();
    });

    test('should emmit a event WHEN select to end day', async () => {
      // Arrange
      const spyOnChangeEnd = jest.spyOn(component.dateChangeEventEnd, 'emit');
      const value= { value: new Date() };
      // Act
      component.onInnerChangeEventEnd(value as MatDatepickerInputEvent<unknown>);
      // Assert
      expect(spyOnChangeEnd).toHaveBeenCalled();
    });

  });
});
