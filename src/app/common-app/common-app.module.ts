import { CommonExtensionModule } from '../common';
import { CommonModule } from '@angular/common';
import { FlexModule } from '@angular/flex-layout';
/* Custom Modules/Components */
import { GuidesComponent } from './guides/guides.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
/* Angular Module/Components */
import { NgModule } from '@angular/core';
import { StaticFieldComponent } from '../common/static-field/static-field.component';
import { SummaryComponent } from './summary/summary.component';
import { UserInformationComponent } from './user-information/user-information.component';

@NgModule({
  declarations: [
    GuidesComponent,
    SummaryComponent,
    UserInformationComponent,
    StaticFieldComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    CommonExtensionModule,
    FlexModule,
  ],
  exports: [
    GuidesComponent,
    SummaryComponent,
    UserInformationComponent,
    StaticFieldComponent,
  ],
})
export class CommonAppModule {}
