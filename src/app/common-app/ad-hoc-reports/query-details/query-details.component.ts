import { Component, Input } from '@angular/core';

import { Frequency } from '../ad-hoc-reports.model';

@Component({
  selector: 'atm-query-details',
  template: `
    <div fxLayout="column wrap" fxLayoutAlign="space-between center">
      <div fxLayout="row wrap" fxLayoutAlign="space-evenly center" fxFill>
        <mat-form-field appearance="fill" fxFlex="30" fxFlex.lt-sm="100">
          <mat-label>QueryID</mat-label>
          <input matInput type="text" placeholder="QueryID" />
        </mat-form-field>
        <mat-form-field appearance="fill" fxFlex="60" fxFlex.lt-sm="100">
          <mat-label>QueryParams</mat-label>
          <input matInput type="text" placeholder="QueryParams" />
        </mat-form-field>
      </div>

      <div fxLayout="row wrap" fxLayoutAlign="space-evenly center" fxFill>
        <mat-form-field appearance="fill" fxFlex="29" fxFlex.lt-sm="100">
          <mat-label>Author</mat-label>
          <input matInput type="text" placeholder="Author" />
        </mat-form-field>

        <mat-form-field appearance="fill" fxFlex="29" fxFlex.lt-sm="100">
          <mat-label>Generation Date</mat-label>
          <input matInput [matDatepicker]="picker" />
          <mat-datepicker-toggle
            matSuffix
            [for]="picker"
          ></mat-datepicker-toggle>
          <mat-datepicker #picker></mat-datepicker>
        </mat-form-field>
        <mat-form-field appearance="fill" fxFlex="29" fxFlex.lt-sm="100">
          <mat-label>Select Frequency</mat-label>
          <mat-select [(ngModel)]="selectedValue" name="frequency">
            <mat-option>None</mat-option>
            <mat-option
              *ngFor="let frequency of frequencies"
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

  public selectedValue: string;

  constructor() {
    this.frequencies = [];
    this.selectedValue = '';
  }
}
