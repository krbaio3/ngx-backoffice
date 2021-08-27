import { Component, OnInit } from '@angular/core';
import { GuidesService } from './guides.service';
import { InputSelectModel } from '../../core/input-select/input-select.model';

@Component({
  template: `
    <atm-ad-hoc-scaffold title="Documentation">
      <atm-input-select
        [inputSelectOption]="documentationOpts"
        (emitterSelect)="handlerEmitterSelect($event)"
      ></atm-input-select>
      <cdk-table-filter
        *ngIf="showTable"
        [dataSource]="dataSource"
        [displayedColumns]="displayColumns"
        [pageSizeOpts]="pageSizeOpts"
        [columnStyle]="['type', { width: '25%' }]"
        filterName="Filter"
        placeholderFilter="input for searching..."
        hasIcon="type"
        hasAnchor="name"
      >
      </cdk-table-filter>
    </atm-ad-hoc-scaffold>
  `,
  styles: [``],
})
export class GuidesComponent implements OnInit {
  public documentationOpts: InputSelectModel = {
    input: '',
    placeHolder: '',
    select: [{ name: '', value: '' }],
  };

  public dataSource: { name: string; type: string }[] = [];

  public displayColumns: string[] = [];

  public pageSizeOpts: number[] = [5, 15, 20];

  public showTable: boolean = false;

  constructor(public guideSrv: GuidesService) {
    this.guideSrv.getDocumentationOptions();
    this.guideSrv.getDataSourceGuides();
    this.guideSrv.getDisplayColumns();
  }

  ngOnInit(): void {
    this.documentationOpts = this.guideSrv.documentationOptions;
    this.dataSource = this.guideSrv.dataSource;
    this.displayColumns = this.guideSrv.displayColumns;
  }

  public handlerEmitterSelect(name: string) {
    if (!name) {
      this.showTable = false;
      return;
    }
    this.showTable = true;
  }
}
