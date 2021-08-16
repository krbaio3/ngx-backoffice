/* Angular Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 3rd Modules */
import { FlexLayoutModule } from '@angular/flex-layout';

/* Custom Modules */
import { CustomPipesModule } from '../../common/pipe/custom-pipes.module';
import { StaticFieldModule } from '../../common/static-field/static-field.module';

/* Components */
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
