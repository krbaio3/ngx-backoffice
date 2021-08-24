import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'atm-search-files',
  template: ` <cdk-date-picker-range
      [label]="'Range Date for Search'"
      fxLayout="column wrap"
      fxLayoutAlign="space-around center"
      fxFill
      fxFlex.gt-sm="50"
      (dateChangeEventStart)="handlerStartEventPicker($event)"
      (dateChangeEventEnd)="handlerEndEventPicker($event)"
    >
    </cdk-date-picker-range>
    <button
      mat-raised-button
      (click)="emitOnSearch.emit()"
      fxFill
      fxFlex.gt-sm="25"
      >Search
    </button>`,
  styles: [''],
})
export class SearchFilesComponent {
  @Output()
  public emitChangeStartEvent: EventEmitter<Date>;

  @Output()
  public emitChangeEndEvent: EventEmitter<Date>;

  @Output()
  public emitOnSearch: EventEmitter<void>;

  constructor() {
    this.emitChangeEndEvent = new EventEmitter<Date>();
    this.emitChangeStartEvent = new EventEmitter<Date>();
    this.emitOnSearch = new EventEmitter<void>();
  }

  public handlerStartEventPicker($event: Date) {
    if (!$event) return;
    this.emitChangeStartEvent.emit($event);
  }

  public handlerEndEventPicker($event: Date) {
    if (!$event) return;
    this.emitChangeEndEvent.emit($event);
  }
}
