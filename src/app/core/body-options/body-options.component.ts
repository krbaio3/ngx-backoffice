import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BodyOption } from './body-options.model';

@Component({
  selector: 'atm-body-options',
  template: `
    <div
      fxLayout="column wrap"
      fxLayout.gt-xs="row wrap"
      fxFill
      fxLayoutAlign.gt-xs="space-evenly center"
    >
      <mat-form-field appearance="outline" fxFlex.gt-xs="45" fxFill>
        <mat-label>{{ bodyOption.input }}</mat-label>
        <input
          matInput
          [placeholder]="bodyOption.input"
          [(ngModel)]="value"
          type="text"
        />
        <button
          mat-button
          *ngIf="value"
          matSuffix
          mat-icon-button
          aria-label="Clear"
          (click)="value = ''"
        >
          <mat-icon>close</mat-icon>
        </button>
      </mat-form-field>
      <mat-form-field appearance="outline" fxFlex.gt-xs="45" fxFill>
        <mat-label>{{ bodyOption.select }}</mat-label>
        <mat-select [(value)]="selected">
          <mat-option>None</mat-option>
          <mat-option value="option1">Option 1</mat-option>
          <mat-option value="option2">Option 2</mat-option>
          <mat-option value="option3">Option 3</mat-option>
        </mat-select>
      </mat-form-field>
    </div>
  `,
  styles: [],
})
export class BodyOptionsComponent {
  @Input()
  public bodyOption: BodyOption;

  @Output()
  public emitValue: EventEmitter<string>;

  @Output()
  public emitterSelect: EventEmitter<string>;

  public selected: any;
  public value: string;

  constructor() {
    this.selected = undefined;
    this.value = '';
    this.bodyOption = { input: '', select: '' };
    this.emitterSelect = new EventEmitter<string>();
    this.emitValue = new EventEmitter<string>();
  }
}
