import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Message } from './filter-menu.model';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'cdk-filter-menu',
  template: `
    <div fxLayout="column" fxLayoutAlign="space-around stretch">
      <mat-accordion multi fxFlexFill>
        <mat-expansion-panel
          [ngStyle]="{
            backgroundColor: 'rgba(65,83,175,0.25)',
            border: '2px',
            borderRadius: '25px'
          }"
          [expanded]="panelState"
          (opened)="handlerOpened()"
          (closed)="handlerClosed()"
        >
          <mat-expansion-panel-header>
            <mat-panel-title> Filters </mat-panel-title>
            <mat-panel-description>
              Select Filter to Apply
            </mat-panel-description>
          </mat-expansion-panel-header>

          <cdk-filter-menu-item
            class="mt-4"
            fxLayout="row"
            fxLayoutAlign="space-around center"
            title="Por rango de fechas:"
            (emitTogglePanel)="togglePanel()"
          >
            <cdk-date-picker-range
              label="Enter a date range"
              [range]="range"
            ></cdk-date-picker-range>
          </cdk-filter-menu-item>

          <cdk-filter-menu-item
            fxLayout="row"
            fxLayoutAlign="space-around center"
            title="By message type:"
            (emitTogglePanel)="togglePanel()"
          >
            <cdk-select-type
              fxLayout="row"
              fxLayoutAlign="space-around center"
              [messageControl]="messageControl"
              [messages]="messages"
              label="Message Type"
            ></cdk-select-type>
          </cdk-filter-menu-item>
        </mat-expansion-panel>
      </mat-accordion>
    </div>
  `,
  styles: [``],
})
export class FilterMenuComponent {
  /* Control para apertura y cierre del Mat-Expansion-Panel*/
  public panelState: boolean;

  /* Rango para el componente fechas */
  public range: FormGroup;

  public messageControl = new FormControl('', Validators.required);

  /* Opciones del select */
  @Input()
  public messages: Message[];

  constructor() {
    this.panelState = false;
    this.messages = [];
    this.range = new FormGroup({
      start: new FormControl(),
      end: new FormControl(),
    });
  }

  public togglePanel() {
    this.panelState = !this.panelState;
  }

  public handlerOpened() {
    this.panelState = true;
  }

  public handlerClosed() {
    this.panelState = false;
  }
}
