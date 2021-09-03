import { Component, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'cdk-title-radio-group',
  template: `
    <div
      fxFill
      fxLayoutAlign="space-around center"
      fxLayout="column wrap"
      fxLayout.gt-xs="row wrap"
      fxLayoutAlign.gt-xs="start baseline"
      [ngStyle.xs]="{ marginBottom: '20px' }"
    >
      <h3 [ngStyle.gt-xs]="{ marginRight: '20px' }">
        {{ title }}
      </h3>

      <mat-radio-group aria-label="radioGrop">
        <mat-radio-button value="and" aria-label="radio-and"
          >AND</mat-radio-button
        >
        <mat-radio-button value="or" aria-label="radio-or">OR</mat-radio-button>
      </mat-radio-group>
    </div>
  `,
  styles: [
    `
      .mat-radio-button ~ .mat-radio-button {
        margin-left: 16px;
      }
    `,
  ],
})
export class TitleRadioGroupComponent {
  @Input()
  public title: string;
  constructor() {
    this.title = '';
  }
}
