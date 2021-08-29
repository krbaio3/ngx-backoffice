import { TestBed } from '@angular/core/testing';

import { SummaryService } from './summary.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { mediaStylesTemporary } from './api.temporal';

describe('SummaryService', () => {
  let service: SummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SummaryService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
  test('should return a object MediaStylesModel[] WHEN call mediaStyles', async () => {

    // Arrange
    // const mediaStylesMock = jest.fn() as any as MediaStylesModel[];
    const spyGet = jest.spyOn(service, 'mediaStyles', 'get');
    const spySet = jest.spyOn(service, 'mediaStyles', 'set');
    const spyMediaStyles = jest.spyOn(service, 'getMediaStyles');

    // Act
    service.getMediaStyles();
    const result = service.mediaStyles;

    // Assert
    expect(spyGet).toHaveBeenCalled();
    expect(spySet).toHaveBeenCalledWith(mediaStylesTemporary);
    expect(spyMediaStyles).toHaveBeenCalled();
    expect(result).toEqual(mediaStylesTemporary);
  });
});
