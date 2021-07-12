import { Component, Input, OnInit } from '@angular/core';

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
export class TableDetailComponent implements OnInit {
  @Input()
  public dataSourceTable: any[];
  @Input()
  public displayedColumns: string[];

  constructor() {
    this.dataSourceTable = [];
    this.displayedColumns = [];
  }

  ngOnInit(): void {
    console.log('tableDetailComponent');
  }
}
