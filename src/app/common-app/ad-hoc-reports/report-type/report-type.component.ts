import { Component, Input } from '@angular/core';

@Component({
  selector: 'atm-report-type',
  template: `
      <div *ngFor="let checkOpt of checkOpts; index as i;">
        <mat-checkbox>{{checkOpt}}</mat-checkbox>
      </div>
`,
  styles: [`
  `]
})
export class ReportTypeComponent {

  @Input()
  public checkOpts: string[];

  public count: number = 0;

  constructor() {
    this.checkOpts = [];
   }
}
