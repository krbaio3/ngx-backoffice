import { TestBed } from '@angular/core/testing';

import { AdHocReportsService } from './ad-hoc-reports.service';
import {
  additionalFiltersOptionsTemporal,
  checkboxOptionsTemporal, datesOptionsTemporal,
  frequencyTemporal,
  partyOptionsTemporal,
  productOptionsTemporal,
} from './api.temporal';
import { Frequency } from './ad-hoc-reports.model';
import DoneCallback = jest.DoneCallback;
import { BodyOption } from '../../core/body-options/body-options.model';

describe('AdHocReportsService', () => {
  let service: AdHocReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdHocReportsService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
  test('should return a frequencyTemporal WHEN call getFrequency method', (done: DoneCallback) => {
    // Arrange
    const spy = jest.spyOn(service, 'getFrequency');
    // Act
    service.getFrequency().subscribe((data: Frequency[])=> {
      expect(data).toEqual(frequencyTemporal);
      done();
    });
    // Assert
    expect(spy).toHaveBeenCalled();
  });
  test('should return a checkboxOptionsTemporal WHEN call getCheckboxOptions method', (done: DoneCallback) => {
    // Arrange
    const spy = jest.spyOn(service, 'getCheckboxOptions');
    // Act
    service.getCheckboxOptions().subscribe((data: string[])=> {
      expect(data).toEqual(checkboxOptionsTemporal);
      done();
    });
    // Assert
    expect(spy).toHaveBeenCalled();
  });
  test('should return a partyOptionsTemporal WHEN call getPartyOptions method', (done: DoneCallback) => {
    // Arrange
    const spy = jest.spyOn(service, 'getPartyOptions');
    // Act
    service.getPartyOptions().subscribe((data: BodyOption[])=> {
      expect(data).toEqual(partyOptionsTemporal);
      done();
    });
    // Assert
    expect(spy).toHaveBeenCalled();
  });
  test('should return a productOptionsTemporal WHEN call getProductOptions method',  (done: DoneCallback) => {
    // Arrange
    const spy = jest.spyOn(service, 'getProductOptions');
    // Act
    service.getProductOptions().subscribe((data: BodyOption[])=> {
      expect(data).toEqual(productOptionsTemporal);
      done();
    });
    // Assert
    expect(spy).toHaveBeenCalled();
  });
  test('should return a datesOptionsTemporal WHEN call getDateOptions method', (done: DoneCallback) => {
    // Arrange
    const spy = jest.spyOn(service, 'getDateOptions');
    // Act
    service.getDateOptions().subscribe((data: string[])=> {
      expect(data).toEqual(datesOptionsTemporal);
      done();
    });
    // Assert
    expect(spy).toHaveBeenCalled();
  });
  test('should return a additionalFiltersOptionsTemporal WHEN call getAdditionalFiltersOptions method', (done: DoneCallback) => {
    // Arrange
    const spy = jest.spyOn(service, 'getAdditionalFiltersOptions');
    // Act
    service.getAdditionalFiltersOptions().subscribe((data: string[])=> {
      expect(data).toEqual(additionalFiltersOptionsTemporal);
      done();
    });
    // Assert
    expect(spy).toHaveBeenCalled();
  });
});
