import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'cdk-filter-menu-item',
  template: `
    <span fxFlex="30">{{ title }}</span>
    <div fxLayout="column" fxFlex="40">
      <ng-content></ng-content>
    </div>
    <div fxFlex="30" fxLayout="row" fxLayoutAlign="center center">
      <button mat-flat-button (click)="toggle()">Agree</button>
    </div>
  `,
})
export class FilterMenuItemComponent {
  /* label de título de la proyección de contenido*/
  @Input()
  public title: string;

  /* Evento de salida cuando se hace click en el botón aceptar*/
  @Output()
  public emitTogglePanel: EventEmitter<boolean> = new EventEmitter<boolean>();

  public toggle() {
    this.emitTogglePanel.emit(true);
  }

  constructor() {
    this.title = '';
  }
}
