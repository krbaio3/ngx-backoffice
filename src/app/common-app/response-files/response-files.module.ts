import { NgModule } from '@angular/core';
import { CommonModule, TitleCasePipe } from '@angular/common';

import { ResponseFilesRoutingModule } from './response-files-routing.module';
import { ResponseFilesComponent } from './response-files.component';
import { AdHocScaffoldModule } from '../../core/ad-hoc-scaffold/ad-hoc-scaffold.module';
import { DatePickerRangeModule } from '../../common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { TableDetailModule } from '../../core/table-detail/table-detail.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableFilesComponent } from './table-files/table-files.component';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { SearchFilesComponent } from './search-files/search-files.component';

@NgModule({
  declarations: [
    ResponseFilesComponent,
    TableFilesComponent,
    SearchFilesComponent,
  ],
  imports: [
    CommonModule,
    ResponseFilesRoutingModule,
    AdHocScaffoldModule,
    DatePickerRangeModule,
    FlexLayoutModule,
    MatButtonModule,
    TableDetailModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
  ],
  providers: [TitleCasePipe],
})
export class ResponseFilesModule {}
