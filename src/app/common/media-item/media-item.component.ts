import { Component, Input, OnInit } from '@angular/core';
import { MediaStylesModel, createEmptyMediaStyle } from './media.model';

import merge from 'lodash.merge';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'cdk-media-item',
  template: `
    <div class="media-item__dashItem mat-elevation-z4">
      <div
        fxFlex="40"
        fxLayout="row"
        fxLayoutAlign="center center"
        [style.background]="style.colorLight"
      >
        <mat-icon class="media-item__icon">{{ style.icon }}</mat-icon>
      </div>
      <div
        fxFlex="60"
        fxLayout="column"
        fxLayoutAlign="center center"
        [style.background]="style.data.colorDark"
      >
        <div
          [ngStyle]="{
            color: style.data.color,
            fontSize: style.data.fontSize,
            margin: '10px 0'
          }"
        >
          <span>{{ style.data.number }}</span>
        </div>
        <p class="mat-body-1 border-top">
          {{ style.data.title }}
        </p>
      </div>
    </div>
  `,
  styles: [
    `
      .border-top {
        border-top: 1px solid white;
      }
      .media-item__icon {
        font-size: 40px;
        height: 40px;
        width: 40px;
        color: white;
      }
      .media-item__dashItem {
        margin: 10px 5px;
        height: 100px;
        background-color: white;
      }
      .mat-body-1 {
        margin: 0;
        color: white;
      }
    `,
  ],
})
export class MediaItemComponent implements OnInit {
  @Input()
  public style: MediaStylesModel = createEmptyMediaStyle();

  ngOnInit(): void {
    this.style = merge(createEmptyMediaStyle(), { ...this.style });
  }
}
