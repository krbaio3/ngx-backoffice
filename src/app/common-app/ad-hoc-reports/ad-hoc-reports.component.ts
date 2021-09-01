import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { AdHocReportsService } from './ad-hoc-reports.service';
import { BodyOption } from '../../core/body-options/body-options.model';
import { Frequency } from './ad-hoc-reports.model';

@Component({
  template: `
    <form (ngSubmit)="onSubmit()" #form="ngForm">
      <atm-ad-hoc-scaffold [title]="'Query Details'">
        <!-- TODO: refactoring with query-details from CORE -->
        <atm-query-details
          fxLayout="column wrap"
          [frequencies]="frequencies"
        ></atm-query-details>
      </atm-ad-hoc-scaffold>

      <atm-ad-hoc-scaffold [title]="'Report Type'">
        <div fxLayout="row" fxLayoutAlign="space-around center">
          <atm-report-type
            fxLayout="column wrap"
            fxLayoutAlign="space-around center"
            [checkOpts]="checkOpts"
            [ngStyle.gt-sm]="{ height: '50px', width: '100%' }"
            fxLayoutAlign.gt-sm="space-evenly space-around"
          >
          </atm-report-type>
        </div>
      </atm-ad-hoc-scaffold>

      <atm-ad-hoc-scaffold [title]="'Parties'">
        <atm-parties
          fxLayout="column wrap"
          fxLayout.gt-xs="column wrap"
          fxLayoutAlign="start baseline"
          fxFill
          [partiesOption]="partiesOption"
        ></atm-parties>
      </atm-ad-hoc-scaffold>

      <atm-ad-hoc-scaffold [title]="'Product'">
        <atm-product
          fxLayout="column wrap"
          fxLayout.gt-xs="column wrap"
          fxLayoutAlign="start baseline"
          fxFill
          [productsOption]="productsOption"
        ></atm-product>
      </atm-ad-hoc-scaffold>

      <atm-ad-hoc-scaffold [title]="'Dates'">
        <atm-single-field [items]="dateNames">
          <ng-template let-item="item">
            <atm-dates
              fxLayout="column wrap"
              fxLayout.gt-xs="column wrap"
              fxLayoutAlign="start stretch"
              fxFlex.gt-xs="95"
              fxFlex.gt-sm="70"
              fxFlex.gt-md="50"
              [dateName]="item"
              fxFill
            ></atm-dates>
          </ng-template>
        </atm-single-field>
      </atm-ad-hoc-scaffold>

      <atm-ad-hoc-scaffold [title]="'Additional Filters'">
        <atm-single-field [items]="additionalFilters">
          <ng-template let-item="item">
            <atm-additional-filters
              fxLayout="column wrap"
              fxLayoutAlign="start stretch"
              fxLayoutAlign.gt-xs="space-evenly stretch"
              fxFlex.gt-xs="95"
              fxFlex.gt-sm="70"
              fxFlex.gt-md="50"
              [additionalFilter]="item"
              fxFill
            ></atm-additional-filters>
          </ng-template>
        </atm-single-field>
      </atm-ad-hoc-scaffold>
      <div fxLayout="row" fxLayoutAlign="end end" fxLayoutGap="20px">
        <button mat-raised-button type="submit" color="primary">Submit</button>
        <button mat-raised-button type="button">Save</button>
      </div>
    </form>
  `,
  styles: [``],
})
export class AdHocReportsComponent implements OnInit {
  public selectedValue: string;

  public frequencies: Frequency[] = [];

  public checkOpts: string[] = [];

  public partiesOption: BodyOption[] = [];

  public productsOption: BodyOption[] = [];

  public dateNames: string[] = [];

  public additionalFilters: string[] = [];

  public offset = 10 / 3;

  constructor(public adHocReportSrv: AdHocReportsService) {
    this.selectedValue = '';
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  public onSubmit() {
    console.log('Submit');
  }

  ngOnInit(): void {
    // TODO: juntar estos servicios en uno, para optimizar.
    this.adHocReportSrv
      .getFrequency()
      .subscribe(
        (frequencies: Frequency[]) => (this.frequencies = frequencies),
      );
    this.adHocReportSrv
      .getCheckboxOptions()
      .subscribe((checkOptions: string[]) => (this.checkOpts = checkOptions));

    this.adHocReportSrv
      .getPartyOptions()
      .subscribe(
        (partiesOpt: BodyOption[]) => (this.partiesOption = partiesOpt),
      );

    this.adHocReportSrv
      .getProductOptions()
      .subscribe(
        (productsOpt: BodyOption[]) => (this.productsOption = productsOpt),
      );

    this.adHocReportSrv
      .getDateOptions()
      .subscribe((dateNames: string[]) => (this.dateNames = dateNames));

    this.adHocReportSrv
      .getAdditionalFiltersOptions()
      .subscribe(
        (additionalFilters: string[]) =>
          (this.additionalFilters = additionalFilters),
      );
  }
}
