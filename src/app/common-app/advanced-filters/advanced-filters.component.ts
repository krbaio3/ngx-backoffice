import { Component, OnInit } from '@angular/core';
import { AdvancedFiltersService } from './advanced-filters.service';
import { createEmptyQueryNames, QueryNames } from '../../core';
import {
  DataSourceAdvancedFilters,
  SelectOptions,
} from './advanced-filters.model';

@Component({
  selector: 'atm-advanced-filters',
  template: `
    <atm-ad-hoc-scaffold title="Query Management">
      <atm-query-details [queryNames]="queryNames">
        <button
          fxFlex="20"
          mat-raised-button
          color="primary"
          (click)="handleClickSearch()"
          >Search</button
        >
        <div fxFlexOffset.gt-sm="3"></div>
      </atm-query-details>
      <cdk-table-filter
        *ngIf="showTable"
        [dataSource]="dataSource"
        [displayedColumns]="displayColumns"
        [pageSizeOpts]="pageSizeOpts"
        [columnStyle]="['action', { width: '25%' }]"
        filterName="Filter"
        placeholderFilter="input for searching..."
        [hasSelect]="selectOptionsObject"
      ></cdk-table-filter>
    </atm-ad-hoc-scaffold>
  `,
  styles: [],
})
export class AdvancedFiltersComponent implements OnInit {
  public showTable: boolean = false;

  public dataSource: DataSourceAdvancedFilters[] = [];

  public displayColumns: string[] = [];

  public pageSizeOpts: number[] = [5, 15, 20];

  public queryNames: QueryNames = createEmptyQueryNames();

  public selectOptions: SelectOptions[] = [];

  public selectOptionsObject: {
    key: string;
    options: { key: string; value: string }[];
  } = { key: '', options: [] };

  constructor(public advancedFiltersSrv: AdvancedFiltersService) {
    this.advancedFiltersSrv.getQueryNames();
    this.advancedFiltersSrv.getDataSourceAdvancedFilters();
    this.advancedFiltersSrv.getDisplayColumnsAdvancedFilters();
    this.advancedFiltersSrv.getSelectOptionsAdvancedFilters();
  }

  ngOnInit(): void {
    this.queryNames = this.advancedFiltersSrv.queryNames;
  }

  handleClickSearch() {
    this.dataSource = this.advancedFiltersSrv.dataSourceAdvancedFilters;
    this.displayColumns = this.advancedFiltersSrv.displayColumnsAdvancedFilters;
    this.selectOptions = this.advancedFiltersSrv.selectOptionsAdvancedFilters;
    this.selectOptionsObject = {
      key: 'action',
      options: this.selectOptions,
    };
    this.showTable = true;
  }
}
