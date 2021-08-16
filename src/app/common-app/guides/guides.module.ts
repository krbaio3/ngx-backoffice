import { GuidesComponent } from './guides.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidesRoutingModule } from './guides-routing.module';

@NgModule({
  declarations: [GuidesComponent],
  imports: [CommonModule, GuidesRoutingModule],
})
export class GuidesModule {}
