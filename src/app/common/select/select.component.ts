import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Message } from '../filter-menu/filter-menu.model';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'cdk-select-type',
  template: `<mat-form-field appearance="fill" fxFill [ngStyle]="customStyle">
    <mat-label>{{ label }}</mat-label>
    <mat-select [formControl]="messageControl" required>
      <mat-option>--</mat-option>
      <mat-option *ngFor="let message of messages" [value]="message">
        {{ message.name }}
      </mat-option>
    </mat-select>
    <mat-error *ngIf="messageControl.hasError('required')"
      >Please choose an option
    </mat-error>
    <mat-hint>{{ messageControl.value?.value }}</mat-hint>
  </mat-form-field>`,
})
export class SelectComponent {
  @Input()
  public label: string;

  @Input()
  public customStyle: NgStyle['ngStyle'];

  @Input()
  public messageControl!: FormControl;

  @Input()
  public messages!: Message[];

  @Input()
  public togglePanel!: () => void;

  constructor() {
    this.label = '';
    this.customStyle = {};
  }
}
