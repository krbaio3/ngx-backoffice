import { Observable, of } from 'rxjs';
import {
  additionalFiltersTemporal,
  checkboxOptionsTemporal,
  datesTemporal,
  frequencyTemporal,
  partyOptionsTemporal,
  productOptionsTemporal,
} from './api.temporal';

import { BodyOption } from 'src/app/core/body-options/body-options.model';
import { Frequency } from './ad-hoc-reports.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdHocReportsService {
  // get frequencyData(): Frequency[] {
  //   return this._frequencyData;
  // }

  // set frequencyData(value: Frequency[]) {
  //   this._frequencyData = value;
  // }

  // private _frequencyData: Frequency[] = [];

  constructor() {
    // this.frequencyData = frequencyTemporal;
  }

  public getFrequency(): Observable<Frequency[]> {
    return of(frequencyTemporal);
  }

  public getCheckboxOptions(): Observable<string[]> {
    return of(checkboxOptionsTemporal);
  }

  public getPartyOptions(): Observable<BodyOption[]> {
    return of(partyOptionsTemporal);
  }

  public getProductOptions(): Observable<BodyOption[]> {
    return of(productOptionsTemporal);
  }

  public getDateOptions(): Observable<string[]> {
    return of(datesTemporal);
  }

  public getAdditionalFiltersOptions(): Observable<string[]> {
    return of(additionalFiltersTemporal);
  }
}
