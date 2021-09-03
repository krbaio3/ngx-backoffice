import { Injectable } from '@angular/core';
import { RankingList, TableLogs } from './fails.model';
import { of } from 'rxjs';
import {
  basicDataErrorGlobalTemporary,
  basicDataTimeVariationTemporary,
  displayColumnsTemporal,
  rankingListTemporal,
  tableLogsTemporal,
} from './api.temporal';
import { TData } from '@atmira/pattern-lib';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class FailsService {
  get displayColumns(): string[] {
    return this._displayColumns;
  }

  set displayColumns(value: string[]) {
    this._displayColumns = value;
  }
  get tableLogs(): TableLogs[] {
    return this._tableLogs;
  }

  set tableLogs(value: TableLogs[]) {
    this._tableLogs = value;
  }
  get basicDataErrorGlobal(): TData {
    return this._basicDataErrorGlobal;
  }

  set basicDataErrorGlobal(value: TData) {
    this._basicDataErrorGlobal = value;
  }
  get basicDataTimeVariation(): TData {
    return this._basicDataTimeVariation;
  }

  set basicDataTimeVariation(value: TData) {
    this._basicDataTimeVariation = value;
  }
  get rankingList(): RankingList[] {
    return this._rankingList;
  }

  set rankingList(value: RankingList[]) {
    this._rankingList = value;
  }

  constructor(public datePipe: DatePipe) {}

  private _rankingList: RankingList[] = [];
  private _basicDataTimeVariation: TData = { labels: [], datasets: [] };
  private _basicDataErrorGlobal: TData = { labels: [], datasets: [] };
  private _tableLogs: TableLogs[] = [];
  private _displayColumns: string[] = [];

  public getRankingList() {
    of(rankingListTemporal).subscribe(
      (rl: RankingList[]) => (this.rankingList = rl),
    );
  }

  public getBasicData() {
    of(basicDataTimeVariationTemporary).subscribe(
      (basic: TData) => (this.basicDataTimeVariation = basic),
    );
  }

  public getErrorGlobal() {
    of(basicDataErrorGlobalTemporary).subscribe(
      (errorGlobal: TData) => (this.basicDataErrorGlobal = errorGlobal),
    );
  }

  public getTableLogs() {
    of(tableLogsTemporal).subscribe((tl: TableLogs[]) => {
      for (const element of tl) {
        element.date = this.transformDate(element.date);
      }
      this.tableLogs = tl;
    });
  }

  public getDisplayColumns() {
    of(displayColumnsTemporal).subscribe(
      (dc: string[]) => (this.displayColumns = dc),
    );
  }

  public transformDate(date: number | string): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') as string;
  }
}
