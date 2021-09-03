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

@Component({
  selector: 'atm-table-files',
  template: `
    <div fxLayout="column" fxLayoutAlign="space-around center">
      <mat-form-field
        fxFill
        ngStyle.gt-sm="width: 80%; min-width: 80%; margin-bottom: 10px"
      >
        <mat-label>Filter</mat-label>
        <input
          matInput
          (keyup)="applyFilter($event)"
          placeholder="my_web.csv"
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
        <!-- Files Column -->
        <ng-container matColumnDef="files">
          <th
            mat-header-cell
            *matHeaderCellDef
            [ngClass.xs]="'text-center-th'"
            mat-sort-header
          >
            Files</th
          >
          <td
            mat-cell
            *matCellDef="let element"
            class="truncate-cell"
            ngStyle.xs="max-width: 120px;"
          >
            <a href="/assets/my_example.csv" download>{{ element.files }}</a>
          </td>
        </ng-container>

        <!-- Date Column -->
        <ng-container matColumnDef="date">
          <th
            mat-header-cell
            *matHeaderCellDef
            [ngClass.xs]="'text-center-th'"
            mat-sort-header
          >
            Date</th
          >
          <td
            mat-cell
            *matCellDef="let element"
            [ngClass.xs]="'text-center-th'"
          >
            {{ element.date }}
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
        [pageSizeOptions]="[8, 15, 20]"
        showFirstLastButtons
      ></mat-paginator>
    </div>
  `,
  styles: [
    `
      .truncate-cell {
        //max-width: 60px; /* feel free to include any other value */
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .text-center-th {
        text-align: center !important;
      }
    `,
  ],
})
export class TableFilesComponent implements AfterViewInit, OnInit, OnChanges {
  @Input()
  dataSource!: { files: string; date: string }[];
  @Input()
  displayedColumns!: string[];

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  private paginator!: MatPaginator;

  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  @ViewChild(MatTable, { static: true })
  tableFiles!: MatTable<any>;

  public dataSourceTable!: MatTableDataSource<{ files: string; date: string }>;

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
  }

  public applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceTable.filter = filterValue.trim().toLowerCase();

    if (this.dataSourceTable.paginator) {
      this.dataSourceTable.paginator.firstPage();
    }
  }
}
