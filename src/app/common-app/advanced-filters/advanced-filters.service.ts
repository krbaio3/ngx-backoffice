import { Injectable } from '@angular/core';
import { createEmptyQueryNames, QueryNames } from '../../core';

@Injectable({
  providedIn: 'root',
})
export class AdvancedFiltersService {
  get queryNames(): QueryNames {
    return this._queryNames;
  }

  set queryNames(value: QueryNames) {
    this._queryNames = value;
  }

  private _queryNames: QueryNames = createEmptyQueryNames();

  constructor() {}

  public getQueryNames() {}
}
