import { Component, Input } from '@angular/core';

import { BodyOption } from '../../../core/body-options/body-options.model';

@Component({
  selector: 'atm-parties',
  template: `
    <cdk-title-radio-group
      [title]="'Operator between parties data:'"
      fxFill
    ></cdk-title-radio-group>

    <div fxFlexFill *ngFor="let partyOption of partiesOption; let i = index">
      <atm-body-options [bodyOption]="partyOption"></atm-body-options>
    </div>
  `,
  styles: [``],
})
export class PartiesComponent {
  @Input()
  public partiesOption: BodyOption[];

  public selected: any;

  constructor() {
    this.selected = undefined;
    this.partiesOption = [];
  }
}
