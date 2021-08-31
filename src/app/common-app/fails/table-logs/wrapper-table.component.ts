import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  Input,
  QueryList,
  ViewChild,
} from '@angular/core';
import {
  MatColumnDef,
  MatHeaderRowDef,
  MatNoDataRow,
  MatRowDef,
  MatTable,
} from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';

/**
 * Table component that accepts column and row definitions in its content to be registered to the
 * table.
 */
@Component({
  selector: 'atm-wrapper-table',
  template: `
    <table mat-table [dataSource]="dataSource">
      <ng-content></ng-content>

      <ng-container matColumnDef="description">
        <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>
        <td mat-cell *matCellDef="let element"> {{ element.description }} </td>
      </ng-container>

      <ng-container matColumnDef="icon">
        <th mat-header-cell *matHeaderCellDef mat-sort-header> Icon </th>
        <td mat-cell *matCellDef="let element"> {{ element.icon }} </td>
      </ng-container>
    </table>
  `,
  styles: [
    `
      table {
        width: 100%;
      }
    `,
  ],
})
export class WrapperTableComponent<T> implements AfterContentInit {
  @ContentChildren(MatHeaderRowDef)
  public headerRowDef!: QueryList<MatHeaderRowDef>;
  @ContentChildren(MatRowDef)
  public rowDefs!: QueryList<MatRowDef<T>>;
  @ContentChildren(MatColumnDef)
  public columnDefs!: QueryList<MatColumnDef>;
  @ContentChild(MatNoDataRow)
  public noDataRow!: MatNoDataRow;

  @ViewChild(MatTable, { static: true })
  public table!: MatTable<T>;

  @Input()
  public columns!: string[];

  @Input()
  public dataSource!: DataSource<T>;

  ngAfterContentInit() {
    for (const columnDef of this.columnDefs) this.table.addColumnDef(columnDef);
    for (const rowDef of this.rowDefs) this.table.addRowDef(rowDef);
    for (const headerRowDef of this.headerRowDef)
      this.table.addHeaderRowDef(headerRowDef);
    this.table.setNoDataRow(this.noDataRow);
  }
}
