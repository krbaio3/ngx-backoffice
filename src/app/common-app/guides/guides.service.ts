import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import {
  dataSourceGuidesTemporal,
  displayColumnsGuidesTemporal,
  documentationOptionsTemporal,
} from './api.temporal';
import { InputSelectModel } from '../../core/input-select/input-select.model';
import { DataSourceGuides } from './guides.model';

@Injectable({
  providedIn: 'root',
})
export class GuidesService {
  get displayColumns(): string[] {
    return this._displayColumns;
  }

  set displayColumns(value: string[]) {
    this._displayColumns = value;
  }
  get dataSource(): DataSourceGuides[] {
    return this._dataSource;
  }

  set dataSource(value: DataSourceGuides[]) {
    this._dataSource = value;
  }
  get documentationOptions(): InputSelectModel {
    return this._documentationOptions;
  }

  set documentationOptions(value: InputSelectModel) {
    this._documentationOptions = value;
  }

  private _documentationOptions: InputSelectModel = {
    input: '',
    placeHolder: '',
    select: [{ name: '', value: '' }],
  };

  private _dataSource: DataSourceGuides[] = [];

  private _displayColumns: string[] = [];

  constructor() {}

  public getDocumentationOptions() {
    of(documentationOptionsTemporal).subscribe(
      (documentOptions: InputSelectModel) =>
        (this.documentationOptions = documentOptions),
    );
  }

  public getDataSourceGuides() {
    of(dataSourceGuidesTemporal).subscribe(
      (ds: DataSourceGuides[]) => (this.dataSource = ds),
    );
  }

  public getDisplayColumns() {
    of(displayColumnsGuidesTemporal).subscribe(
      (dc: string[]) => (this.displayColumns = dc),
    );
  }
}
