/* Angular Modules/Components*/
import { NgModule } from '@angular/core';

/*Custom Modules*/
import { SidenavModule } from './sidenav/sidenav.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { SingleFieldModule } from './single-field/single-field.module';

/*Custom Components*/

@NgModule({
  imports: [SidenavModule, ToolbarModule, SingleFieldModule],
  exports: [ToolbarModule, SidenavModule],
})
export class CoreModule {}
