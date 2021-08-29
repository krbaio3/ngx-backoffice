import { TestBed } from '@angular/core/testing';

import { AdvancedFiltersService } from './advanced-filters.service';
import {
  dataSourceAdvancedFiltersTemporal,
  displayColumnsAdvancedFiltersTemporal,
  queryNamesTemporal, selectOptionsTemporal,
} from './api.temporal';

describe('AdvancedFiltersService', () => {
  let service: AdvancedFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvancedFiltersService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should set queryNames WHEN call to getQueryNames', async () => {
    // Arrange
    const spySet = jest.spyOn(service, 'queryNames', 'set');
    const spyGet = jest.spyOn(service, 'queryNames', 'get');

    // Act
    service.getQueryNames();

    // Assert
    expect(service.queryNames).toEqual(queryNamesTemporal);
    expect(spyGet).toHaveBeenCalled();
    expect(spySet).toHaveBeenCalledWith(queryNamesTemporal);
  });

  test('should set dataSourceAdvancedFilters WHEN call to getDataSourceAdvancedFilters', async () => {
    // Arrange
    const spySet = jest.spyOn(service, 'dataSourceAdvancedFilters', 'set');
    const spyGet = jest.spyOn(service, 'dataSourceAdvancedFilters', 'get');

    // Act
    service.getDataSourceAdvancedFilters();

    // Assert
    expect(service.dataSourceAdvancedFilters).toEqual(dataSourceAdvancedFiltersTemporal);
    expect(spyGet).toHaveBeenCalled();
    expect(spySet).toHaveBeenCalledWith(dataSourceAdvancedFiltersTemporal);
  });

  test('should set displayColumnsAdvancedFilters WHEN call to getDisplayColumnsAdvancedFilters', async () => {
    // Arrange
    const spySet = jest.spyOn(service, 'displayColumnsAdvancedFilters', 'set');
    const spyGet = jest.spyOn(service, 'displayColumnsAdvancedFilters', 'get');

    // Act
    service.getDisplayColumnsAdvancedFilters();

    // Assert
    expect(service.displayColumnsAdvancedFilters).toEqual(displayColumnsAdvancedFiltersTemporal);
    expect(spyGet).toHaveBeenCalled();
    expect(spySet).toHaveBeenCalledWith(displayColumnsAdvancedFiltersTemporal);
  });
  test('should set selectOptionsAdvancedFilters WHEN call to getSelectOptionsAdvancedFilters', async () => {
    // Arrange
    const spySet = jest.spyOn(service, 'selectOptionsAdvancedFilters', 'set');
    const spyGet = jest.spyOn(service, 'selectOptionsAdvancedFilters', 'get');

    // Act
    service.getSelectOptionsAdvancedFilters();

    // Assert
    expect(service.selectOptionsAdvancedFilters).toEqual(selectOptionsTemporal);
    expect(spyGet).toHaveBeenCalled();
    expect(spySet).toHaveBeenCalledWith(selectOptionsTemporal);
  });
});
