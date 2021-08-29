import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { NgStyle } from '@angular/common';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'cdk-table-filter',
  template: `
    <div fxLayout="column" fxLayoutAlign="space-around center">
      <mat-form-field
        fxFill
        ngStyle.gt-sm="width: 80%; min-width: 80%; margin-bottom: 10px"
      >
        <mat-label>{{ filterName }}</mat-label>
        <input
          matInput
          (keyup)="applyFilter($event)"
          [placeholder]="placeholderFilter"
          #input
        />
      </mat-form-field>
      <table
        #tableFiles
        mat-table
        [dataSource]="dataSourceTable"
        fxFill
        matSort
        ngStyle.gt-sm="width: 80%; min-width: 80%"
      >
        <!-- Dynamic Column -->
        <ng-container
          matColumnDef="{{ columnName }}"
          *ngFor="let columnName of displayedColumns"
        >
          <th
            mat-header-cell
            *matHeaderCellDef
            ngClass.xs="text-center-th"
            mat-sort-header
          >
            {{ columnName | titlecase }}</th
          >
          <td
            mat-cell
            *matCellDef="let element"
            class="truncate-cell"
            ngStyle.xs="max-width: 120px;"
            [ngStyle]="columnName == columnStyle[0] ? columnStyle[1] : null"
          >
            <div [ngSwitch]="columnName">
              <!-- If the column is an Icon-->
              <mat-icon *ngSwitchCase="hasIcon">
                {{ element[columnName] }}
              </mat-icon>
              <!-- END If the column is an Icon-->
              <!-- If the column is an Anchor tag-->
              <a *ngSwitchCase="hasAnchor" href="/assets/dummy.pdf" download>{{
                element[columnName]
              }}</a>
              <!-- End If the column is an Anchor tag-->
              <!-- If the column is an Select-->
              <mat-form-field
                appearance="outline"
                fxFill
                *ngSwitchCase="hasSelect.key"
                class="mat-form-field-ajuste"
              >
                <mat-label>State</mat-label>
                <mat-select>
                  <mat-option>-- None --</mat-option>
                  <mat-option
                    *ngFor="let option of hasSelect.options"
                    [value]="option"
                    >{{ option.value }}</mat-option
                  >
                </mat-select>
              </mat-form-field>
              <!-- End If the column is an Select-->
              <span *ngSwitchDefault>{{ element[columnName] }}</span>
            </div>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>

        <!-- Row shown when there is no matching data. -->
        <tr class="mat-row" *matNoDataRow>
          <td class="mat-cell" colspan="4"
            >No data matching the filter "{{ input.value }}"</td
          >
        </tr>
      </table>

      <mat-paginator
        ngStyle.xs="display: none"
        ngStyle.gt-sm="width: 80%; min-width: 80%"
        [pageSizeOptions]="pageSizeOpts"
        showFirstLastButtons
      ></mat-paginator>
    </div>
  `,
  styles: [
    `
      .truncate-cell {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .text-center-th {
        text-align: center !important;
      }

      :host ::ng-deep .mat-form-field-ajuste .mat-form-field-wrapper {
        margin: 0.5em 0;
        padding-bottom: 0;
      }
    `,
  ],
})
export class TableFilterComponent implements AfterViewInit, OnInit, OnChanges {
  @Input()
  dataSource!: any[];
  @Input()
  public filterName: string;
  @Input()
  public placeholderFilter: string;
  @Input()
  displayedColumns!: string[];
  @Input()
  public pageSizeOpts: number[];
  @Input()
  public hasIcon: string;
  @Input()
  public hasSelect: { key: string; options: { key: string; value: string }[] };
  @Input()
  public columnStyle: [string, NgStyle['ngStyle']];
  @Input()
  public hasAnchor: string;
  @Input()
  public options: { key: string; value: string }[];

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  private paginator!: MatPaginator;

  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  @ViewChild(MatTable, { static: true })
  tableFiles!: MatTable<any>;

  public dataSourceTable!: MatTableDataSource<any>;

  public setDataSourceAttributes() {
    this.dataSourceTable.paginator = this.paginator;
    this.dataSourceTable.sort = this.sort;
  }

  ngAfterViewInit() {
    this.setDataSourceAttributes();
  }

  ngOnInit() {
    this.dataSourceTable = new MatTableDataSource(this.dataSource);
  }

  ngOnChanges() {
    this.dataSourceTable = new MatTableDataSource(this.dataSource);
    this.setDataSourceAttributes();
    if (this.dataSourceTable.paginator) {
      this.dataSourceTable.paginator.firstPage();
    }
  }

  constructor() {
    this.dataSourceTable = new MatTableDataSource<{
      files: string;
      date: string;
    }>([]);
    this.displayedColumns = [];
    this.filterName = '';
    this.placeholderFilter = '';
    this.pageSizeOpts = [5, 10, 15];
    this.hasIcon = '';
    this.hasAnchor = '';
    this.columnStyle = ['', {}];
    this.hasSelect = { key: '', options: [] };
    this.options = [];
  }

  public applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceTable.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceTable.paginator) {
      this.dataSourceTable.paginator.firstPage();
    }
  }
}
