import { Component, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'cdk-static-field',
  template: `
    <mat-form-field appearance="outline">
      <mat-label>{{ label }}</mat-label>
      <mat-icon *ngIf="!!icon" matSuffix>{{ icon }}</mat-icon>
      <input
        matInput
        [placeholder]="placeholder"
        [ngStyle]="styles"
        [disabled]="disabled"
        [value]="value"
      />
      <!--      <mat-hint>Hint</mat-hint>-->
    </mat-form-field>
  `,
  styles: [``],
})
export class StaticFieldComponent {
  @Input()
  public label = 'Outline form field';

  @Input()
  public placeholder = 'placeholder';

  @Input()
  // public icon = 'sentiment_very_satisfied';
  public icon = '';

  @Input()
  public styles: { [T: string]: string } = {};

  @Input()
  public disabled = true;

  @Input()
  public value!: string;

  constructor() {}
}
