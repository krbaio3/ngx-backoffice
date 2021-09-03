import { Component } from '@angular/core';
import { ResponseFilesService } from './response-files.service';

@Component({
  template: `
    <atm-ad-hoc-scaffold title="Search">
      <atm-search-files
        fxLayout="column wrap"
        fxLayout.gt-sm="row wrap"
        fxLayoutAlign="space-evenly center"
        fxLayoutAlign.gt-sm="space-evenly baseline"
        (emitChangeEndEvent)="handlerEndEventPicker($event)"
        (emitChangeStartEvent)="handlerStartEventPicker($event)"
        (emitOnSearch)="onSearch()"
      ></atm-search-files>
    </atm-ad-hoc-scaffold>

    <atm-ad-hoc-scaffold title="Response files" *ngIf="showResponseFiles">
      <!--      TODO: refactoring esta tabla con el componente de common table-filter-->
      <atm-table-files
        [dataSource]="dataSource"
        [displayedColumns]="displayedColumns"
      ></atm-table-files>
    </atm-ad-hoc-scaffold>
  `,
  styles: [],
})
export class ResponseFilesComponent {
  set endDay(value: Date) {
    this._endDay = value;
  }
  set startDay(value: Date) {
    this._startDay = value;
  }

  get endDay() {
    return this._endDay;
  }
  get startDay() {
    return this._startDay;
  }

  /* Date start property*/
  private _startDay: Date = new Date();

  /* Date end property*/
  private _endDay: Date = new Date();

  /*  Show table with response files */
  public showResponseFiles: boolean = false;

  /* Tabla Source*/
  public dataSource!: { files: string; date: string }[];

  /* Tabla Displayed Columns*/
  public displayedColumns: string[] = [];

  constructor(private responseFilesSrv: ResponseFilesService) {}

  handlerStartEventPicker($event: Date) {
    this.startDay = $event;
  }
  handlerEndEventPicker($event: Date) {
    this.endDay = $event;
  }

  onSearch() {
    if (!this.startDay || !this.endDay) {
      console.error('Algo es nulo');
      return;
    }
    this.dataSource = [];
    this.showResponseFiles = false;

    this.responseFilesSrv.getResponseFiles(this.startDay, this.endDay);
    this.responseFilesSrv.getDisplayColumnsRF();

    this.displayedColumns = this.responseFilesSrv.displayColumnsRF;

    this.dataSource = this.responseFilesSrv.responseFiles;

    this.showResponseFiles = true;
  }
}
