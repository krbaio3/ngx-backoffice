import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'cdk-filter-menu-item',
  template: `
    <span>{{ title }}</span>
    <div fxLayout="column" fxFlex="40">
      <ng-content></ng-content>
    </div>
    <button mat-flat-button (click)="toggle()">Aceptar</button>
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
