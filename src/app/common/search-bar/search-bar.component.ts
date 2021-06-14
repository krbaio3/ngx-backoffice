/* eslint-disable @angular-eslint/component-selector */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cdk-search-bar',
  template: ` <mat-form-field
    class="search"
    style="max-height: 66px"
    [ngClass]="{ 'search-open': open == true }"
  >
    <input
      matInput
      placeholder="Search"
      autocomplete="off"
      (focus)="bigMenu = true"
      (focusout)="bigMenu = false"
    />
  </mat-form-field>`,
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  public bigMenu: any;
  @Input() open: any;
}
