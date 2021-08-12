import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {
  additionalFiltersOptionsTemporal,
  checkboxOptionsTemporal,
  datesOptionsTemporal,
  frequencyTemporal,
  partyOptionsTemporal,
  productOptionsTemporal,
} from './api.temporal';

import { Frequency } from './ad-hoc-reports.model';
import { BodyOption } from '../../core/body-options/body-options.model';

@Injectable({
  providedIn: 'root',
})
export class AdHocReportsService {
  constructor() {}

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
    return of(datesOptionsTemporal);
  }

  public getAdditionalFiltersOptions(): Observable<string[]> {
    return of(additionalFiltersOptionsTemporal);
  }
}
