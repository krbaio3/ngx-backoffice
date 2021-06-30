/* Angular Module/Components */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Custom Modules/Components */
import { GuidesComponent } from './guides/guides.component';
import { SummaryComponent } from './summary/summary.component';
import { UserInformationComponent } from './user-information/user-information.component';

@NgModule({
  declarations: [GuidesComponent, SummaryComponent, UserInformationComponent],
  imports: [CommonModule],
  exports: [GuidesComponent, SummaryComponent, UserInformationComponent],
})
export class CommonAppModule {}
