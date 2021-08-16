import { Component, Input } from '@angular/core';

import { DoughnutDataGroup } from '../temporal';
import { EmitterEventCanvas } from '../summary.model';

@Component({
  selector: 'atm-doughnut-detail',
  template: `
    <div
      fxLayout="column wrap"
      *ngFor="let item of dataGroupMonitoring; let i = index"
    >
      <mat-tab-group
        animationDuration="0ms"
        class="detail_monitoring-mat-tab-border_none"
        (selectedTabChange)="handlerSelectTab()"
      >
        <div
          fxLayout="column wrap"
          *ngFor="let tap of item.dataset; let k = index"
        >
          <mat-tab [label]="tap.label">
            <br />
            <atm-chart-detail
              [width]="'360'"
              [labelChart]="tap!.chartLabelDataset"
              [dataset]="[item.dataset[k]]"
              [chartOptions]="item.options"
              [type]="'doughnut'"
              (emitClickCanvas)="handlerEmitClick($event)"
              [id]="'detail'"
            >
            </atm-chart-detail
          ></mat-tab>
        </div>
      </mat-tab-group>
    </div>
  `,
  styles: [''],
})
export class DoughnutDetailComponent {
  @Input()
  public dataGroupMonitoring: DoughnutDataGroup[] = [];

  handlerEmitDataSelect(event: Event) {
    console.log(event);
  }

  handlerEmitClick(event: EmitterEventCanvas) {
    console.log(event);
  }

  handlerSelectTab() {
    console.log('cambio de pestaña');
  }

  constructor() {}
}
