import { Component, Input } from '@angular/core';

import { NgStyle } from '@angular/common';
import { adHocReports } from '../../utils/variable-styles.global';

///TODO: Promocionar a CORE si se usa en más sitios
@Component({
  selector: 'atm-ad-hoc-scaffold',
  template: `
    <mat-card [ngStyle]="style">
      <mat-card-header>
        <mat-card-title>{{ title }}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <ng-content></ng-content>
      </mat-card-content>
    </mat-card>
  `,
  styles: [``],
})
export class AdHocScaffoldComponent {
  @Input()
  public title: string;

  public style: NgStyle['ngStyle'];

  constructor() {
    this.title = '';
    const {
      card: { style },
    } = adHocReports;
    this.style = style;
  }
}
