import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TData, TOptions, TType } from '@atmira/pattern-lib';
import merge from 'lodash.merge';
import { EmitterEventCanvas } from '../../common-app/summary/summary.model';

@Component({
  selector: 'atm-chart-detail',
  template: `
    <css-chart
      [height]="height"
      [width]="width"
      [data]="basicData"
      [options]="chartOptions"
      [type]="type"
      [id]="id"
      (emitDataSelect)="handlerEmitDataSelect($event)"
    ></css-chart>
  `,
  styles: [``],
})
export class ChartDetailComponent implements OnInit {
  @Input()
  public height: string = '500';

  @Input()
  public width: string = '';

  @Input()
  public labelChart: string[] = [];

  @Input()
  public dataset: any[] = [];

  @Input()
  public type: TType = 'bar';

  @Input()
  public chartOptions: TOptions = {};

  @Input()
  public title?: string;

  @Input()
  public id: string = 'myCanvas';

  @Output()
  public emitClickCanvas: EventEmitter<EmitterEventCanvas> = new EventEmitter<EmitterEventCanvas>();

  public basicData: TData;

  ngOnInit() {
    this.chartOptions = merge(
      { ...this.chartOptions },
      {
        plugins: {
          legend: {},
        },
      },
    );
    this.basicData = {
      labels: this.labelChart,
      datasets: this.dataset,
    };
  }

  constructor() {
    this.basicData = {} as TData;
  }

  handlerEmitDataSelect(event: EmitterEventCanvas) {
    this.emitClickCanvas.emit(event);
  }
}
