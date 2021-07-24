import { Component, Input } from '@angular/core';

import { BodyOption } from '../../../core/body-options/body-options.model';

@Component({
  selector: 'atm-product',
  template: `
    <cdk-title-radio-group
      fxFill
      [title]="'Operator between parties data:'"
    ></cdk-title-radio-group>

    <div fxFlexFill *ngFor="let productOption of productsOption; let i = index">
      <atm-body-options [bodyOption]="productOption"></atm-body-options>
    </div>

    <div
      fxFill
      fxLayoutAlign="space-around center"
      fxLayout="column wrap"
      fxLayout.gt-xs="row wrap"
      fxLayoutAlign.gt-xs="space-evenly baseline"
    >
      <mat-form-field fxFill fxFlex.gt-xs="45">
        <input
          matInput
          placeholder="Product Classification"
          [(ngModel)]="value"
        />
      </mat-form-field>

      <mat-form-field appearance="fill" fxFill fxFlex.gt-xs="45">
        <mat-label>Asset Class</mat-label>
        <mat-select fxFill [(ngModel)]="selectedValue" name="item">
          <mat-option>None</mat-option>
          <mat-option *ngFor="let item of items" [value]="item.value">
            {{ item.viewValue }}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </div>
  `,
  styles: [],
})
export class ProductComponent {
  @Input()
  public productsOption: BodyOption[];

  public selectedValue: string;

  public items: any[];

  public value: string;

  constructor() {
    this.productsOption = [];
    this.selectedValue = '';
    this.value = '';
    this.items = [
      { viewValue: 'Opción 1', value: 'opt1' },
      { viewValue: 'Opción 2', value: 'opt2' },
      { viewValue: 'Opción 3', value: 'opt3' },
    ];
  }
}
