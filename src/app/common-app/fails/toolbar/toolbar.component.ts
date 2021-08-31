import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'atm-toolbar',
  template: `
    <mat-toolbar fxLayoutAlign="space-between center">
      <mat-toolbar-row fxFill>
        <span fxLayoutAlign="start">{{ title }}</span>
        <div fxLayoutAlign="end" fxFlex>
          <button mat-icon-button>
            <mat-icon (click)="handlerClickEvent()">refresh</mat-icon>
          </button>
          <button mat-icon-button [matMenuTriggerFor]="menu">
            <mat-icon>more_vert</mat-icon>
          </button>
          <mat-menu #menu="matMenu">
            <button mat-menu-item>
              <mat-icon>list</mat-icon>
              <span>List</span>
            </button>
            <button mat-menu-item>
              <mat-icon>print</mat-icon>
              <span>Print</span>
            </button>
          </mat-menu>
        </div>
      </mat-toolbar-row>
    </mat-toolbar>
    <mat-progress-bar
      *ngIf="showLoader"
      [color]="'primary'"
      [mode]="'indeterminate'"
      [value]="90"
      [bufferValue]="10"
    >
    </mat-progress-bar>
    <ng-content></ng-content>
  `,
  styles: [],
})
export class ToolbarComponent {
  @Input()
  public title: string;

  @Input()
  public showLoader: boolean;

  @Output()
  public emitterEventClick: EventEmitter<any>;

  constructor() {
    this.emitterEventClick = new EventEmitter<any>();
    this.showLoader = false;
    this.title = '';
  }

  public handlerClickEvent() {
    this.emitterEventClick.emit();
  }
}
