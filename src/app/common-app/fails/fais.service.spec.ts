import { TestBed } from '@angular/core/testing';

import { FailsService } from './fails.service';
import { DatePipe } from '@angular/common';
import {
  basicDataErrorGlobalTemporary,
  basicDataTimeVariationTemporary,
  displayColumnsTemporal,
  rankingListTemporal,
} from './api.temporal';

describe('FailsService', () => {
  let service: FailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DatePipe
      ]
    });
    service = TestBed.inject(FailsService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should set the rankingList property WHEN call getRankingList method', async () => {
    // Arrange
    const spy = jest.spyOn(service, 'rankingList', 'set');

    // Act
    service.getRankingList();

    // Assert
    expect(spy).toHaveBeenCalledWith(rankingListTemporal);
  });
  test('should set the basicDataTimeVariation property WHEN call getBasicData method', async () => {
    // Arrange
    const spy = jest.spyOn(service, 'basicDataTimeVariation', 'set');

    // Act
    service.getBasicData();

    // Assert
    expect(spy).toHaveBeenCalledWith(basicDataTimeVariationTemporary);
  });
  test('should set the basicDataErrorGlobal property WHEN call getErrorGlobal method', async () => {
    // Arrange
    const spy = jest.spyOn(service, 'basicDataErrorGlobal', 'set');

    // Act
    service.getErrorGlobal();

    // Assert
    expect(spy).toHaveBeenCalledWith(basicDataErrorGlobalTemporary);
  });
  test('should set the tableLogsTemporal property WHEN call getTableLogs method', async () => {
    // Arrange
    const spy = jest.spyOn(service, 'tableLogs', 'set');

    // Act
    service.getTableLogs();

    // Assert
    expect(spy).toHaveBeenCalled();
  });
  test('should set the displayColumns property WHEN call getDisplayColumns method', async () => {
    // Arrange
    const spy = jest.spyOn(service, 'displayColumns', 'set');

    // Act
    service.getDisplayColumns();

    // Assert
    expect(spy).toHaveBeenLastCalledWith(displayColumnsTemporal);
  });
  test('should transform a Date value to string WHEN call transformDate method', async () => {
    // Arrange
    const today = Date.now();

    // Act
    const result = service.transformDate(today);

    const resultFormat = result.split('-');

    // Assert
    expect(resultFormat).toHaveLength(3);
  });
});
