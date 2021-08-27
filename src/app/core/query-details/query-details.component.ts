import { Component, Input } from '@angular/core';

import {
  createEmptyQueryNames,
  Frequency,
  QueryNames,
} from './query-details.model';

@Component({
  selector: 'atm-query-details',
  template: `
    <div fxLayout="column wrap" fxLayoutAlign="space-between center">
      <div fxLayout="row wrap" fxLayoutAlign="space-evenly center" fxFill>
        <mat-form-field appearance="outline" fxFlex="30" fxFlex.lt-sm="100">
          <mat-label>{{ queryNames.input1.label }}</mat-label>
          <input
            matInput
            type="text"
            [placeholder]="queryNames.input1.placeholder"
          />
        </mat-form-field>
        <mat-form-field appearance="outline" fxFlex="60" fxFlex.lt-sm="100">
          <mat-label>{{ queryNames.input2.label }}</mat-label>
          <input
            matInput
            type="text"
            [placeholder]="queryNames.input2.placeholder"
          />
        </mat-form-field>
      </div>

      <div fxLayout="row wrap" fxLayoutAlign="space-evenly center" fxFill>
        <mat-form-field appearance="outline" fxFlex="29" fxFlex.lt-sm="100">
          <mat-label>{{ queryNames.input3.label }}</mat-label>
          <input
            matInput
            type="text"
            [placeholder]="queryNames.input3.placeholder"
          />
        </mat-form-field>

        <mat-form-field appearance="outline" fxFlex="29" fxFlex.lt-sm="100">
          <mat-label>{{ queryNames.datePicker.label }}</mat-label>
          <input
            matInput
            [matDatepicker]="picker"
            [placeholder]="queryNames.datePicker.placeholder"
          />
          <mat-datepicker-toggle
            matSuffix
            [for]="picker"
          ></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>
        <mat-form-field appearance="outline" fxFlex="29" fxFlex.lt-sm="100">
          <mat-label>{{ queryNames.select.label }}</mat-label>
          <mat-select [(ngModel)]="selectedValue" name="frequency">
            <mat-option>None</mat-option>
            <mat-option
              *ngFor="let frequency of queryNames.select.options"
              [value]="frequency.key"
            >
              {{ frequency.value }}
            </mat-option>
          </mat-select>
        </mat-form-field>
      </div>
    </div>
  `,
  styles: [],
})
export class QueryDetailsComponent {
  @Input()
  public frequencies: Frequency[];

  @Input()
  public queryNames: QueryNames;

  public selectedValue: string;

  constructor() {
    this.frequencies = [];
    this.selectedValue = '';
    this.queryNames = createEmptyQueryNames();
  }
}
