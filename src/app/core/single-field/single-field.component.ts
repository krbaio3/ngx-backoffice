import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

import { AdditionalFiltersComponent } from '../../common-app/ad-hoc-reports/additional-filters/additional-filters.component';
import { DatesComponent } from '../../common-app/ad-hoc-reports/dates/dates.component';

@Component({
  selector: 'atm-single-field',
  template: `
    <div
      *ngFor="let item of items"
      fxFill
      fxLayoutAlign="center center"
      fxLayoutAlign.gt-sm="space-evenly stretch"
    >
      <template
        [ngTemplateOutlet]="templateFromParent"
        [ngTemplateOutletContext]="{ item: item }"
      ></template>
    </div>
  `,
  styles: [],
})
export class SingleFieldComponent {
  @Input()
  public items: any[];

  @ContentChild(TemplateRef) templateFromParent!: TemplateRef<
    DatesComponent | AdditionalFiltersComponent
  > | null;

  constructor() {
    this.items = [];
  }
}
