import { InputFileModule } from './../../common/input-file/input-file.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';
import { AdHocScaffoldModule } from '../../core/ad-hoc-scaffold/ad-hoc-scaffold.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    UploadRoutingModule,
    InputFileModule,
    AdHocScaffoldModule,
    FlexLayoutModule,
  ],
})
export class UploadModule {}
