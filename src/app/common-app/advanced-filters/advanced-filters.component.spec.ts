import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { AdvancedFiltersComponent } from './advanced-filters.component';
import { AdHocScaffoldModule, QueryDetailsModule } from '../../core';
import { MatButtonModule } from '@angular/material/button';
import { TableFilterModule } from '../../common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AdvancedFiltersService } from './advanced-filters.service';
import {
  dataSourceAdvancedFiltersTemporal,
  displayColumnsAdvancedFiltersTemporal, queryNamesTemporal,
  selectOptionsTemporal,
} from './api.temporal';
import exp from 'constants';


describe('AdvancedFiltersComponent', () => {
  let component: AdvancedFiltersComponent;
  let fixture: ComponentFixture<AdvancedFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ AdvancedFiltersComponent ],
      imports: [
        AdHocScaffoldModule,
        QueryDetailsModule,
        MatButtonModule,
        TableFilterModule,
        NoopAnimationsModule,
      ],
      providers: [
        AdvancedFiltersService,
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
  test('should set all properties from table and change the property showTable to true WHEN call to handleClickSearch', async () => {
    // Arrange
    let showTable = component.showTable;
    expect(showTable).toBeFalsy();

    // Act
    component.handleClickSearch();
    fixture.detectChanges();
    showTable = component.showTable;

    // Assert
    expect(component.dataSource).toEqual(dataSourceAdvancedFiltersTemporal);
    expect(component.displayColumns).toEqual(displayColumnsAdvancedFiltersTemporal);
    expect(component.selectOptionsObject).toEqual({
      key: 'action',
      options: component.selectOptions,
    });
    expect(showTable).toBeTruthy();
  });

  test('should call queryNames WHEN ngOnInit', async () => {
    // Arrange
    const service = fixture.debugElement.injector.get(AdvancedFiltersService);
    const spy = jest.spyOn(service, 'queryNames', 'get');
    // Act
    component.ngOnInit();
    // Assert
    expect(component.queryNames).toEqual(queryNamesTemporal);
    expect(spy).toHaveBeenCalled();
  });
});
