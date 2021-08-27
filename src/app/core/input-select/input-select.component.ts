import { Component, EventEmitter, Input, Output } from '@angular/core';

import { InputSelectModel, SelectModel } from './input-select.model';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'atm-input-select',
  template: `
    <div
      fxLayout="column wrap"
      fxLayout.gt-xs="row wrap"
      fxLayoutAlign.gt-xs="start baseline"
      fxFill
    >
      <mat-label fxFlexOffset="5" fxFlex.gt-xs="5">{{
        inputSelectOption.input
      }}</mat-label>

      <mat-form-field fxFlex.gt-xs="60" appearance="outline">
        <mat-label>{{ inputSelectOption.placeHolder }}</mat-label>
        <input
          matInput
          aria-label="name"
          [matAutocomplete]="autoGroup"
          [formControl]="optionsCtrl"
        />
        <mat-autocomplete
          #autoGroup="matAutocomplete"
          (optionSelected)="emitterSelectOption($event.option.value)"
        >
          <mat-option
            *ngFor="let opt of filteredOptions | async"
            [value]="opt.value"
          >
            <span>{{ opt.value }}</span>
          </mat-option>
        </mat-autocomplete>
        <button
          mat-button
          *ngIf="optionsCtrl.value"
          matSuffix
          mat-icon-button
          aria-label="Clear"
          (click)="emitterClearValue()"
        >
          <mat-icon>close</mat-icon>
        </button>
      </mat-form-field>
    </div>
  `,
  styles: [],
})
export class InputSelectComponent {
  @Input()
  public inputSelectOption: InputSelectModel;

  filteredOptions: Observable<SelectModel[]>;

  optionsCtrl = new FormControl();

  @Output()
  public emitValue: EventEmitter<string>;

  @Output()
  public emitterSelect: EventEmitter<string>;

  public value: string;

  constructor() {
    this.value = '';
    this.inputSelectOption = {
      input: '',
      placeHolder: '',
      select: [{ name: '', value: '' }],
    };
    this.emitterSelect = new EventEmitter<string>();
    this.emitValue = new EventEmitter<string>();
    this.filteredOptions = this.optionsCtrl.valueChanges.pipe(
      startWith(''),
      map((opt) =>
        opt ? this._filterOptions(opt) : [...this.inputSelectOption.select],
      ),
    );
  }

  private _filterOptions(value: string): SelectModel[] {
    const filterValue = value.toLowerCase();

    return this.inputSelectOption.select.filter((state) =>
      state.value.toLowerCase().includes(filterValue),
    );
  }

  public emitterClearValue() {
    this.optionsCtrl.setValue('');
    this.emitterSelect.emit('');
  }

  public emitterSelectOption(value: string) {
    this.emitterSelect.emit(value);
  }
}
