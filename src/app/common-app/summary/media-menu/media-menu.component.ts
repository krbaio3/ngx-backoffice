import { Component, Input, OnInit } from '@angular/core';
import { MediaStylesModel } from '../../../common';

@Component({
  selector: 'atm-media-menu',
  template: ` <div
    *ngFor="let item of mediaStyles; let index"
    fxFlex="25"
    fxFlex.lt-sm="100"
    fxFlex.lt-md="50"
  >
    <cdk-media-item [style]="item"></cdk-media-item>
  </div>`,
  styles: [],
})
export class MediaMenuComponent implements OnInit {
  @Input()
  public mediaStyles: MediaStylesModel[] = [];

  constructor() {}

  ngOnInit(): void {
    console.log('MediaMenuComponent');
  }
}
