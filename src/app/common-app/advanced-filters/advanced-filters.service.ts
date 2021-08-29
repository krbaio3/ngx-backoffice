import { Injectable } from '@angular/core';
import { createEmptyQueryNames, QueryNames } from '../../core';
import { of } from 'rxjs';
import {
  dataSourceAdvancedFiltersTemporal,
  displayColumnsAdvancedFiltersTemporal,
  queryNamesTemporal,
  selectOptionsTemporal,
} from './api.temporal';
import {
  DataSourceAdvancedFilters,
  SelectOptions,
} from './advanced-filters.model';

@Injectable({
  providedIn: 'root',
})
export class AdvancedFiltersService {
  get selectOptionsAdvancedFilters(): SelectOptions[] {
    return this._selectOptionsAdvancedFilters;
  }

  set selectOptionsAdvancedFilters(value: SelectOptions[]) {
    this._selectOptionsAdvancedFilters = value;
  }
  get displayColumnsAdvancedFilters(): string[] {
    return this._displayColumnsAdvancedFilters;
  }

  set displayColumnsAdvancedFilters(value: string[]) {
    this._displayColumnsAdvancedFilters = value;
  }
  get dataSourceAdvancedFilters(): DataSourceAdvancedFilters[] {
    return this._dataSourceAdvancedFilters;
  }

  set dataSourceAdvancedFilters(value: DataSourceAdvancedFilters[]) {
    this._dataSourceAdvancedFilters = value;
  }
  get queryNames(): QueryNames {
    return this._queryNames;
  }

  set queryNames(value: QueryNames) {
    this._queryNames = value;
  }

  private _queryNames: QueryNames = createEmptyQueryNames();
  private _dataSourceAdvancedFilters: DataSourceAdvancedFilters[] = [];
  private _displayColumnsAdvancedFilters: string[] = [];
  private _selectOptionsAdvancedFilters: SelectOptions[] = [];

  constructor() {}

  public getQueryNames() {
    of(queryNamesTemporal).subscribe(
      (qn: QueryNames) => (this.queryNames = qn),
    );
  }

  public getDataSourceAdvancedFilters() {
    of(dataSourceAdvancedFiltersTemporal).subscribe(
      (ds: DataSourceAdvancedFilters[]) => {
        this.dataSourceAdvancedFilters = ds;
      },
    );
  }

  public getDisplayColumnsAdvancedFilters() {
    of(displayColumnsAdvancedFiltersTemporal).subscribe((dc: string[]) => {
      this.displayColumnsAdvancedFilters = dc;
    });
  }

  public getSelectOptionsAdvancedFilters() {
    of(selectOptionsTemporal).subscribe((options: SelectOptions[]) => {
      this.selectOptionsAdvancedFilters = options;
    });
  }
}
