import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'atm-dates',
  template: `
    <cdk-date-picker-range
      [label]="dateName"
      [range]="range"
      fxFill
    ></cdk-date-picker-range>
  `,
  styles: [],
})
export class DatesComponent {
  @Input()
  public dateName: string;

  public range: FormGroup;

  constructor() {
    this.dateName = 'default';
    this.range = new FormGroup({
      start: new FormControl(),
      end: new FormControl(),
    });
  }
}
