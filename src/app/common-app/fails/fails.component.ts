import { Component, OnInit } from '@angular/core';
import { TData, TOptions, TType } from '@atmira/pattern-lib';
import { FailsService } from './fails.service';
import { RankingList, TableLogs } from './fails.model';

@Component({
  template: ` <div
      fxLayout="row"
      fxLayoutAlign="space-between stretch"
      fxFill
      fxLayoutGap="20px"
      [ngStyle]="{ 'margin-bottom': '20px' }"
    >
      <atm-ranking-list
        fxFlex="50%"
        [ranking]="rankingList"
        [showLoader]="showRanking"
      ></atm-ranking-list>
      <atm-toolbar
        fxLayout="column"
        fxLayoutAlign="space-between stretch"
        fxFlex="50%"
        class="mat-elevation-z8"
        title="Time Variation"
      >
        <css-chart
          [data]="basicDataTimeVariation"
          [options]="chartOptionsTimeVariation"
          [type]="typeTimeVariationChart"
          [responsive]="true"
          id="timeVariationChart"
          style="margin-bottom: 30px;"
          fxFlex="100%"
        >
        </css-chart>
      </atm-toolbar>
    </div>
    <div
      fxLayout="row"
      fxLayoutAlign="space-around stretch"
      fxFill
      fxLayoutGap="20px"
    >
      <atm-toolbar
        fxLayout="column"
        fxLayoutAlign="center stretch"
        fxFlex="50%"
        class="mat-elevation-z8"
        title="Error Global"
      >
        <css-chart
          fxFlex="100%"
          [data]="basicDataErrorGlobal"
          [options]="chartOptionsErrorGlobal"
          [type]="typeErrorGlobalChart"
          [responsive]="true"
          id="errorGlobalChart"
        ></css-chart>
      </atm-toolbar>
      <atm-table-logs
        fxFlex="50%"
        [tableDataSource]="dataSource"
        [tableDisplayedColumns]="displayColumns"
      ></atm-table-logs>
    </div>`,
  styles: [
    `
      .atm-chart {
        display: flex;
        align-items: center;
      }
    `,
  ],
})
export class FailsComponent implements OnInit {
  constructor(public failsSrv: FailsService) {
    this.failsSrv.getRankingList();
    this.failsSrv.getBasicData();
    this.failsSrv.getErrorGlobal();
    this.failsSrv.getTableLogs();
    this.failsSrv.getDisplayColumns();
  }

  /* Primer Gráfico Time Variation */

  public basicDataTimeVariation!: TData;

  public chartOptionsTimeVariation: TOptions;

  public typeTimeVariationChart!: TType;

  /* Segundo Gráfico ErrorGlobal */

  public basicDataErrorGlobal!: TData;

  public chartOptionsErrorGlobal: TOptions;

  public typeErrorGlobalChart!: TType;

  public rankingList: RankingList[] = [];

  public showRanking: boolean = false;

  /* Table */
  public dataSource: TableLogs[] = [];
  public displayColumns: string[] = [];

  ngOnInit() {
    this.showRanking = true;
    this.rankingList = this.failsSrv.rankingList;
    this.showRanking = false;

    this.initChartTimeVariation();
    this.initChartErrorGlobal();
    this.dataSource = this.failsSrv.tableLogs;
    this.displayColumns = this.failsSrv.displayColumns;
  }

  private initChartTimeVariation() {
    this.typeTimeVariationChart = 'line';
    this.basicDataTimeVariation = this.failsSrv.basicDataTimeVariation;

    this.chartOptionsTimeVariation = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
        title: {
          text: 'Time Variation',
          display: true,
        },
      },
    };
  }

  private initChartErrorGlobal() {
    this.typeErrorGlobalChart = 'polarArea';
    this.basicDataErrorGlobal = this.failsSrv.basicDataErrorGlobal;

    this.chartOptionsErrorGlobal = {
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Error Global',
        },
      },
    };
  }
}
