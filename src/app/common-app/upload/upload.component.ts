import { Component } from '@angular/core';

@Component({
  template: `
    <atm-ad-hoc-scaffold
      [style]="{ backgroundColor: '#FFFFFF' }"
      fxLayoutAlign.gt-md="center center"
    >
      <atm-input-file
        [ngStyle.gt-md]="{ minHeight: '200px', minWidth: '900px' }"
        fxLayout="column"
        fxLayoutAlign.gt-md="center center"
      ></atm-input-file>
    </atm-ad-hoc-scaffold>
  `,
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {}
