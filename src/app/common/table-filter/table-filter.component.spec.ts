import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFilterComponent } from './table-filter.component';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

describe('TableFilterComponent', () => {
  let component: TableFilterComponent;
  let fixture: ComponentFixture<TableFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFilterComponent ],
      imports: [
        MatInputModule,
        FlexLayoutModule,
        MatTableModule,
        MatPaginatorModule,
        NoopAnimationsModule,
        MatIconModule,
        MatSelectModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should filter the table WHEN call the applyFilter method', async () => {
    // Arrange
    const event = { target: {
      value: 'test'
      }} as any as KeyboardEvent;
    const date = new Date().toString();
    component.dataSourceTable = new MatTableDataSource([{ files: 'test', date }]);
    component.dataSourceTable.paginator = {
      firstPage: () => ({})
    } as any as MatPaginator;

    // Act
    component.applyFilter(event)

    // Assert
    expect(component.dataSourceTable.filter).toEqual((event.target as HTMLInputElement).value)
  });
  describe('LifeCicle specs', () => {
    test('should set dataSourceTable WHEN ngOnInit', async () => {
      // Arrange
      const date = new Date().toString();
      component.dataSource = [{ files: 'test', date }];

      // Act
      component.ngOnInit();

      // Assert
      expect(component.dataSourceTable).toBeDefined();
      expect(component.dataSourceTable.data).toEqual([{ files: 'test', date }]);

    });
    test('should call setDataSourceAttributes WHEN ngAfterViewInit', async () => {
      // Arrange
      const spy = jest.spyOn(component, 'setDataSourceAttributes');

      // Act
      component.ngAfterViewInit();

      // Assert
      expect(spy).toHaveBeenCalled();
    });

    test('should call datasourceTable WHEN ngOnChanges', async () => {
      // Arrange
      const date = new Date().toString();
      component.dataSource = [{ files: 'test', date }];
      const spy = jest.spyOn(component, 'setDataSourceAttributes');

      // Act
      component.ngOnChanges();

      // Assert
      expect(spy).toHaveBeenCalled();
      expect(component.dataSourceTable.data).toEqual([{ files: 'test', date }]);
    });
  });
});
