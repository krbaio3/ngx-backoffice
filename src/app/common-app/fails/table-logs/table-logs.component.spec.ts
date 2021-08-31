import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLogsComponent } from './table-logs.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TableLogsComponent', () => {
  let component: TableLogsComponent;
  let fixture: ComponentFixture<TableLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ TableLogsComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLogsComponent);
    component = fixture.componentInstance;
    component.tableDataSource = [];
    component.tableDisplayedColumns = [];
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
  test('should copy the tableDataSource WHEN call ngOnInit', () => {
    expect(component.copy_tableDataSource).toEqual([]);
    // Arrange
    const mockArray =
      [
        'Chicago Pizza',
        'Neapolitan Pizza',
        'New York Pizza',
        'Sicilian Pizza',
      ];
    component.tableDataSource = mockArray;

    // Act
    component.ngOnInit();

    // Assert
    expect(component.copy_tableDataSource).toEqual(mockArray);
  });

  test('should call addData and clearTable WHEN pass 2000 ms', () => {
    jest.useFakeTimers();

    const spyClear = jest.spyOn(component, 'clearTable');
    const spyAdd = jest.spyOn(component, 'addData');

    // Act
    component.handlerEventClick();

    // Assert
    expect(component.showLoading).toBeTruthy();
    expect(spyClear).toHaveBeenCalled();
    expect(component.tableDataSource).toEqual([]);

    jest.runOnlyPendingTimers();

    expect(spyAdd).toHaveBeenCalled();
    expect(component.showLoading).toBeFalsy();
  });
});
