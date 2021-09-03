import { TestBed } from '@angular/core/testing';

import { ResponseFilesService } from './response-files.service';
import * as temporal from './api.temporal'

describe('ReportFilesService', () => {
  let service: ResponseFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponseFilesService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
  test('should set displayColumnsRF with displayColumnsTemporal WHEN call getDisplayColumnsRF method', () => {
    // Arrange
    // Act
    service.getDisplayColumnsRF();
    // Assert
    expect(service.displayColumnsRF).toEqual(temporal.displayColumnsTemporal);
  });

  test('should set responseFiles with generateFile method WHEN call getResponseFiles method', () => {
    // Arrange
    const spy = jest.spyOn(temporal, 'generateFile');
    // Act
    service.getResponseFiles(new Date(), new Date());
    // Assert
    expect(service.responseFiles).not.toEqual([]);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
