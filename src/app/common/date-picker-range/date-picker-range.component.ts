import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'cdk-date-picker-range',
  template: ` <mat-form-field appearance="fill" fxFill>
      <mat-label>{{ label }}</mat-label>
      <mat-date-range-input
        [formGroup]="range"
        [rangePicker]="picker"
        [disabled]="disabled"
      >
        <input
          matStartDate
          formControlName="start"
          [placeholder]="placeholderStart"
          (dateInput)="onInnerInputEventStart($event)"
          (dateChange)="onInnerChangeEventStart($event)"
        />
        <input
          matEndDate
          formControlName="end"
          [placeholder]="placeholderEnd"
          (dateInput)="onInnerInputEventEnd($event)"
          (dateChange)="onInnerChangeEventEnd($event)"
        />
      </mat-date-range-input>
      <mat-datepicker-toggle matSuffix [for]="picker">
        <mat-icon matDatepickerToggleIcon>{{ icon }}</mat-icon>
      </mat-datepicker-toggle>
    </mat-form-field>
    <mat-date-range-picker #picker></mat-date-range-picker>

    <mat-error *ngIf="range.controls.start.hasError('matStartDateInvalid')"
      >{{ errorStart }}
    </mat-error>
    <mat-error *ngIf="range.controls.end.hasError('matEndDateInvalid')"
      >{{ errorEnd }}
    </mat-error>`,
})
export class DatePickerRangeComponent {
  /* Label para el input
   *
   * @required
   */
  @Input()
  public label: string;

  /* formGroup para datepicker */
  @Input()
  public range: FormGroup;

  /**
   * Opción para deshabilitar el botón
   */
  @Input()
  public disabled: boolean;

  /**
   * Placeholder input start day
   */
  @Input()
  public placeholderStart: string;

  /**
   * Placeholder input end day
   */
  @Input()
  public placeholderEnd: string;

  /**
   * Icon to show in input
   */
  @Input()
  public icon: string;

  @Input()
  public errorStart: string;

  @Input()
  public errorEnd: string;

  /**
   * Optional dateChangeEventStart event
   */
  @Output()
  dateChangeEventStart: EventEmitter<Date> = new EventEmitter<Date>();

  /**
   * Optional onInnerChangeEventStart: dateChange event handler
   */
  onInnerChangeEventStart(inputEvent: MatDatepickerInputEvent<Date | unknown>) {
    this.dateChangeEventStart.emit(inputEvent.value as Date);
  }

  /**
   * Optional dateInputEventStart event
   */
  @Output()
  dateInputEventStart: EventEmitter<Date> = new EventEmitter<Date>();

  /**
   * Optional onInnerInputEventStart: dateInput event handler
   */
  onInnerInputEventStart(inputEvent: MatDatepickerInputEvent<Date | unknown>) {
    this.dateInputEventStart.emit(inputEvent.value as Date);
  }

  /**
   * Optional dateChangeEventEnd event
   */
  @Output()
  dateChangeEventEnd: EventEmitter<Date> = new EventEmitter<Date>();

  /**
   * Optional onInnerChangeEventEnd: dateChange event handler
   */
  onInnerChangeEventEnd(inputEvent: MatDatepickerInputEvent<Date | unknown>) {
    this.dateChangeEventEnd.emit(inputEvent.value as Date);
  }

  /**
   * Optional dateInputEventEnd event
   */
  @Output()
  dateInputEventEnd: EventEmitter<Date> = new EventEmitter<Date>();

  /**
   * Optional onInnerInputEventEnd: dateInput event handler
   */
  onInnerInputEventEnd(inputEvent: MatDatepickerInputEvent<Date | unknown>) {
    this.dateInputEventEnd.emit(inputEvent.value as Date);
  }

  constructor() {
    this.label = '';
    this.range = new FormGroup({
      start: new FormControl(),
      end: new FormControl(),
    });
    this.disabled = false;
    this.placeholderStart = 'Start date';
    this.placeholderEnd = 'End date';
    this.icon = 'date_range';
    this.errorStart = 'Invalid start date';
    this.errorEnd = 'Invalid end date';
  }
}
