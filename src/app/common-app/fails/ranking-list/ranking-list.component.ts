import { Component, Input } from '@angular/core';
import { RankingList } from '../fails.model';

@Component({
  selector: 'atm-ranking-list',
  template: `<div class="sales-list mat-elevation-z4 ">
    <atm-toolbar
      [showLoader]="showLoader"
      (emitterEventClick)="reload()"
      title="Ranking List"
    ></atm-toolbar>
    <mat-list>
      <mat-list-item
        *ngFor="let sale of ranking"
        [ngStyle]="{
          'background-color':
            sale.name == 'registr' ? 'rgba(60,190,60,0.5)' : 'inherit'
        }"
      >
        <img
          matListAvatar
          [src]="sale.companyIcon"
          alt="Image of {{ sale.name }}"
          fxLayoutAlign="start"
          style="object-fit: fill;"
        />
        <span fxFlex></span>
        <span fxLayoutAlign="center"> {{ sale.companyName | titlecase }} </span>
        <span fxFlex></span>
        <mat-chip-list fxLayoutAlign="end">
          <mat-chip *ngIf="sale.accept" color="primary" selected="true">
            <span>{{ sale.accept }}</span> <mat-icon>check</mat-icon>
          </mat-chip>
          <!--          <mat-chip *ngIf="sale.cancel" color="accent" selected="true">-->
          <!--            {{ sale.cancel }} <mat-icon>cancel</mat-icon>-->
          <!--          </mat-chip>-->
          <!--          <mat-chip *ngIf="sale.pending" color="warn" selected="true">-->
          <!--            <span>{{ sale.pending }} <mat-icon>pending</mat-icon></span>-->
          <!--          </mat-chip>-->
        </mat-chip-list>
      </mat-list-item>
    </mat-list>
  </div>`,
})
export class RankingListComponent {
  @Input()
  public showLoader: boolean;
  @Input()
  public ranking: RankingList[];

  constructor() {
    this.showLoader = false;
    this.ranking = [];
  }

  reload() {
    this.showLoader = true;
    setTimeout(() => {
      this.showLoader = false;
    }, 2000);
  }
}
