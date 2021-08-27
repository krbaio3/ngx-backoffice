import { Component } from '@angular/core';

@Component({
  selector: 'atm-advanced-filters',
  template: `
    <atm-ad-hoc-scaffold title="Query Management">
      <atm-query-details></atm-query-details>
    </atm-ad-hoc-scaffold>
  `,
  styles: [],
})
export class AdvancedFiltersComponent {
  constructor() {}
}
