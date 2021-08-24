/* Angular Modules */
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

/* Custom Modules */
import { AdHocScaffoldModule } from '../../core/ad-hoc-scaffold/ad-hoc-scaffold.module';
import { DatePickerRangeModule } from '../../common';

/* Custom Components */
import { ResponseFilesComponent } from './response-files.component';
import { SearchFilesComponent } from './search-files/search-files.component';
import { TableFilesComponent } from './table-files/table-files.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ResponseFilesService } from './response-files.service';

describe('ResponseFilesComponent', () => {
  let component: ResponseFilesComponent;
  let fixture: ComponentFixture<ResponseFilesComponent>;

  beforeEach(async () => {
    const responseFilesSrvStub = ()=> ({
      getDisplayColumnsRF: () => ({}),
      displayColumnsRF: ['files', 'date'],
      getResponseFiles: () => ({}),
      responseFiles: [{ files: 'test', date: 'test' }]
    });
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        ResponseFilesComponent,
        SearchFilesComponent,
        TableFilesComponent,
      ],
      imports: [
        AdHocScaffoldModule,
        DatePickerRangeModule,
        MatTableModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: ResponseFilesService, useFactory: responseFilesSrvStub },
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
  test('should set startDay property WHEN call handlerStartEventPicker', async () => {
    // Arrange
    const startDay = component.startDay;
    const myDate = new Date('August 23, 2020 03:24:00');
    //comprobamos que la propiedad está inicializada
    expect(startDay.getDate()).toBeTruthy();

    // Act
    component.handlerStartEventPicker(myDate);
    fixture.detectChanges();

    // Assert
    expect(component.startDay).toEqual(myDate);
  });

  test('should set endDay property WHEN call handlerEndEventPicker', async () => {
    // Arrange
    const endDay = component.endDay;
    const myDate = new Date('August 23, 2020 03:24:00');
    //comprobamos que la propiedad está inicializada
    expect(endDay.getDate()).toBeTruthy();

    // Act
    component.handlerEndEventPicker(myDate);
    // fixture.detectChanges();

    // Assert
    expect(component.endDay).toEqual(myDate);
  });

  test('should change the showResponseFiles to true WHEN onSearch method is called', async () => {
    // Arrange
    const myDate = new Date('August 23, 2020 03:24:00');

    // Act
    component.handlerEndEventPicker(myDate);
    component.handlerStartEventPicker(myDate);
    component.onSearch();

    // Assert
    expect(component.dataSource).toEqual([{ files: 'test', date: 'test' }]);
    expect(component.displayedColumns).toEqual(['files', 'date']);
    expect(component.showResponseFiles).toBeTruthy();
  });
  test('should return a error WHEN startDay or endDay is undefined', async () => {
    // Arrange
    component.startDay = undefined as any as Date;
    component.endDay = undefined as any as Date;
    const spy = jest.spyOn(console, 'error');

    // Act
    component.onSearch();

    // Assert
    expect(component.dataSource).toBeUndefined();
    expect(component.displayedColumns).toEqual([]);
    expect(component.showResponseFiles).toBeFalsy();
    expect(spy).toHaveBeenCalledWith('Algo es nulo');
  });
});
