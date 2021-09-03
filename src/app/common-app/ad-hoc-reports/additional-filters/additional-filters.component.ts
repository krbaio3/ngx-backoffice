import { Component, Input } from '@angular/core';

@Component({
  selector: 'atm-additional-filters',
  template: `
    <mat-form-field appearance="outline" fxFill>
      <mat-label>{{ additionalFilter }}</mat-label>
      <input
        matInput
        [placeholder]="additionalFilter"
        [(ngModel)]="value"
        type="text"
      />
    </mat-form-field>
  `,
  styles: [],
})
export class AdditionalFiltersComponent {
  @Input()
  public additionalFilter: string;

  public value: string;

  constructor() {
    this.additionalFilter = '';
    this.value = '';
  }
}
