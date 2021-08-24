import { Component, Input } from '@angular/core';

@Component({
  selector: 'atm-table-detail',
  template: `
    <css-filter-table
      [dataSource]="dataSourceTable"
      [displayedColumns]="displayedColumns"
    ></css-filter-table>
  `,
  styles: [],
})
export class TableDetailComponent {
  @Input()
  public dataSourceTable: any[];
  @Input()
  public displayedColumns: string[];

  constructor() {
    this.dataSourceTable = [];
    this.displayedColumns = [];
  }
}
