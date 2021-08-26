import { TestBed } from '@angular/core/testing';

import { GuidesService } from './guides.service';
import { dataSourceGuidesTemporal, displayColumnsGuidesTemporal, documentationOptionsTemporal } from './api.temporal';

describe('GuidesService', () => {
  let service: GuidesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuidesService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should set the documentationOptions property WHEN call getDocumentationOptions', () => {
    // Arrange
    // Comprobamos que la variable esté inicializada
    expect(service.documentationOptions).toEqual({
      input: '',
      placeHolder: '',
      select: [{ name: '', value: '' }],
    });

    // Act
    service.getDocumentationOptions();

    // Assert
    expect(service.documentationOptions).toEqual(documentationOptionsTemporal);
  });

  test('should set the dataSource property WHEN call getDataSourceGuides',  () => {
    // Arrange
    // Comprobamos que la variable esté inicializada
    expect(service.dataSource).toEqual([]);

    // Act
    service.getDataSourceGuides();

    // Assert
    expect(service.dataSource).toEqual(dataSourceGuidesTemporal);
  });

  test('should set the dataSource property WHEN call getDisplayColumns',  () => {
    // Arrange
    // Comprobamos que la variable esté inicializada
    expect(service.displayColumns).toEqual([]);

    // Act
    service.getDisplayColumns();

    // Assert
    expect(service.displayColumns).toEqual(displayColumnsGuidesTemporal);
  });

});
