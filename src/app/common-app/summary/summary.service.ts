import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  chartOptionsTemporary,
  dataSetTemporary,
  dataTableSourceTemporary,
  displayedTableColumnsTemporary,
  DoughnutDataGroup,
  doughnutLabelGroupTemporary,
  labelChartTemporary,
  mediaStylesTemporary,
  messagesTemporary,
} from './temporal';
import { of } from 'rxjs';
import { TOptions } from '@atmira/pattern-lib';
import { MediaStylesModel, Message } from '../../common';

@Injectable({
  providedIn: 'root',
})
export class SummaryService {
  get dataDisplayedColumns(): string[] {
    return this._dataDisplayedColumns;
  }

  set dataDisplayedColumns(value: string[]) {
    this._dataDisplayedColumns = value;
  }
  get dataTableSource(): any[] {
    return this._dataTableSource;
  }

  set dataTableSource(value: any[]) {
    this._dataTableSource = value;
  }
  get messageValues(): Message[] {
    return this._messageValues;
  }

  set messageValues(value: Message[]) {
    this._messageValues = value;
  }

  get doughnutData(): DoughnutDataGroup[] {
    return this._doughnutData;
  }

  set doughnutData(value: DoughnutDataGroup[]) {
    this._doughnutData = value;
  }

  get doughnutOptions(): TOptions {
    return this._doughnutOptions;
  }

  set doughnutOptions(value: TOptions) {
    this._doughnutOptions = value;
  }
  get mediaStyles(): MediaStylesModel[] {
    return this._mediaStyles;
  }

  set mediaStyles(value: MediaStylesModel[]) {
    this._mediaStyles = value;
  }
  get chartOptions(): TOptions {
    return this._chartOptions;
  }

  set chartOptions(value: TOptions) {
    this._chartOptions = value;
  }
  get dataSet(): any[] {
    return this._dataSet;
  }

  set dataSet(value: any[]) {
    this._dataSet = value;
  }
  get labelChart(): string[] {
    return this._labelChart;
  }

  set labelChart(value: string[]) {
    this._labelChart = value;
  }

  private _labelChart: string[] = [];
  private _dataSet: any[] = [];
  private _chartOptions: TOptions = {};
  private _mediaStyles: MediaStylesModel[] = [];
  private _doughnutOptions: TOptions = {};
  private _doughnutData: any[] = [];
  private _messageValues: Message[] = [];
  private _dataTableSource: any[] = [];
  private _dataDisplayedColumns: string[] = [];

  constructor(private $http: HttpClient) {}

  getLabelChart(): void {
    of(labelChartTemporary).subscribe((label: string[]) => {
      this.labelChart = label;
    });
  }

  getDataset() {
    of(dataSetTemporary).subscribe((dataset) => {
      this.dataSet = dataset;
    });
  }

  getChartOptions() {
    of(chartOptionsTemporary).subscribe((chartOpt) => {
      this.chartOptions = chartOpt;
    });
  }

  getMediaStyles() {
    of(mediaStylesTemporary).subscribe((mediaStyles: MediaStylesModel[]) => {
      this.mediaStyles = mediaStyles;
    });
  }

  getDoughnutData() {
    of(doughnutLabelGroupTemporary).subscribe((data: DoughnutDataGroup[]) => {
      this.doughnutData = data;
    });
  }

  getMessageValues() {
    of(messagesTemporary).subscribe((messages: Message[]) => {
      this.messageValues = messages;
    });
  }

  getDataTableSource() {
    of(dataTableSourceTemporary).subscribe((source) => {
      this.dataTableSource = source;
    });
  }

  getDataDisplayedColumns() {
    of(displayedTableColumnsTemporary).subscribe((columns) => {
      this.dataDisplayedColumns = columns;
    });
  }
}
