/* eslint-disable @angular-eslint/component-selector */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'cdk-search-bar',
  template: ` <mat-form-field
    class="search"
    style="max-height: 66px"
    data-testid="mat-form-search-class"
    [ngClass]="{ 'search-open': open == true }"
  >
    <input
      matInput
      [placeholder]="placeholder"
      autocomplete="off"
      aria-label="buscador"
      (focus)="bigMenu = true"
      (focusout)="bigMenu = false"
    />
  </mat-form-field>`,
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  public bigMenu: any;
  @Input() open: any;
  @Input() placeholder: string = 'Search';
}
