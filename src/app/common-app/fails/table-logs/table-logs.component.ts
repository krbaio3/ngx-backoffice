import { Component, Input, OnInit } from '@angular/core';

/**
 * @title Table Logs.
 */
@Component({
  selector: 'atm-table-logs',
  template: `
    <atm-toolbar
      fxLayout="column"
      fxLayoutAlign="center stretch"
      fxFlex
      class="mat-elevation-z8"
      title="Logs"
      (emitterEventClick)="handlerEventClick()"
      [showLoader]="showLoading"
    >
      <cdk-table-filter
        [dataSource]="tableDataSource"
        [displayedColumns]="tableDisplayedColumns"
        [isFullWidth]="true"
        [pageSizeOpts]="[12, 20, 30]"
        filterName="Filter"
        placeholderFilter="Search Logs"
        hasIcon="icon"
        fxFlex
      ></cdk-table-filter>
    </atm-toolbar>
  `,
  styles: [
    `
      table {
        width: 100%;
      }

      button {
        margin: 0 8px 8px 0;
      }
    `,
  ],
})
export class TableLogsComponent implements OnInit {
  @Input()
  public tableDataSource!: any[];

  @Input()
  public tableDisplayedColumns!: string[];

  public showLoading: boolean;

  public copy_tableDataSource!: any[];

  constructor() {
    this.showLoading = false;
    this.copy_tableDataSource = [];
  }

  public ngOnInit() {
    this.copy_tableDataSource = [...this.tableDataSource];
  }

  public clearTable() {
    this.tableDataSource = [];
  }

  public addData() {
    this.tableDataSource = [...this.copy_tableDataSource];
  }

  public handlerEventClick() {
    this.showLoading = true;
    setTimeout(() => {
      this.addData();
      this.showLoading = false;
    }, 2000);
    this.clearTable();
  }
}
