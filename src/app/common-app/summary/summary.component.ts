import { Component, OnInit } from '@angular/core';
import { SummaryService } from './summary.service';
import { MediaStylesModel } from '../../common';
import { TOptions } from '@atmira/pattern-lib';
import { EmitterEventCanvas } from './summary.model';
import { DoughnutDataGroup } from './temporal';
import { Message } from '../../common/filter-menu/filter-menu.model';

@Component({
  selector: 'atm-summary',
  template: `
    <cdk-filter-menu [messages]="messageOptions"></cdk-filter-menu>
    <atm-chart-detail
      [height]="'500'"
      [labelChart]="labelChart"
      [dataset]="dataSet"
      [chartOptions]="chartOptions"
      (emitClickCanvas)="handlerEmitterEventCanvas($event)"
      [id]="'actionMonitoring'"
      title="Action Monitoring"
    ></atm-chart-detail>
    <atm-media-menu
      class="my-5"
      [mediaStyles]="mediaStyles"
      fxLayout="row wrap"
      fxLayoutAlign="space-around stretch"
    ></atm-media-menu>

    <h3>Detail Monitoring</h3>
    <atm-doughnut-detail
      fxLayout="row wrap"
      fxLayoutAlign="space-around stretch"
      [dataGroupMonitoring]="doughnutDataGroup"
    ></atm-doughnut-detail>

    <atm-table-detail
      *ngIf="showTableDetail"
      [dataSourceTable]="dataSource"
      [displayedColumns]="displayedColumns"
    ></atm-table-detail>
  `,
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  /* Activity Monitoring */
  public labelChart: string[] = [];
  public dataSet: any[] = [];
  public chartOptions: TOptions = {};

  /* Media Menu */
  public mediaStyles: MediaStylesModel[] = [];

  /* Detail Monitoring */
  public doughnutDataGroup: DoughnutDataGroup[] = [];

  /* Show Table Detail */
  public showTableDetail: boolean = false;

  /* Message Options */
  public messageOptions: Message[] = [];

  /* Tabla Source*/
  public dataSource: any[] = [];

  /* Tabla Displayed Columns*/
  public displayedColumns: string[] = [];

  ngOnInit() {
    console.log('SummaryComponent');

    this.labelChart = this.summarySrv.labelChart;
    this.dataSet = this.summarySrv.dataSet;
    this.mediaStyles = this.summarySrv.mediaStyles;
    this.chartOptions = this.summarySrv.chartOptions;
    this.doughnutDataGroup = this.summarySrv.doughnutData;
    this.messageOptions = this.summarySrv.messageValues;
    this.dataSource = this.summarySrv.dataTableSource;
    this.displayedColumns = this.summarySrv.dataDisplayedColumns;
  }

  constructor(private summarySrv: SummaryService) {
    this.summarySrv.getLabelChart();
    this.summarySrv.getDataset();
    this.summarySrv.getMediaStyles();
    this.summarySrv.getChartOptions();
    this.summarySrv.getDoughnutData();
    this.summarySrv.getMessageValues();
    this.summarySrv.getDataTableSource();
    this.summarySrv.getDataDisplayedColumns();
  }

  handlerEmitterEventCanvas(event: EmitterEventCanvas) {
    console.log(event);
    this.showTableDetail = true;
  }
}
