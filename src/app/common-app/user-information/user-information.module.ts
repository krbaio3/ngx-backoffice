import { CommonModule } from '@angular/common';
import { CustomPipesModule } from '../../common/pipe/custom-pipes.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { StaticFieldModule } from '../../common/static-field/static-field.module';
import { UserInformationComponent } from './user-information.component';

@NgModule({
  declarations: [UserInformationComponent],
  imports: [
    CommonModule,
    StaticFieldModule,
    FlexLayoutModule,
    CustomPipesModule,
  ],
  exports: [UserInformationComponent],
})
export class UserInformationModule {}
