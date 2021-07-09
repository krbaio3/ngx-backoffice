/* Angular Modules/Components*/
import { NgModule } from '@angular/core';

/*Custom Modules*/
import { SidenavModule } from './sidenav/sidenav.module';
import { ToolbarModule } from './toolbar/toolbar.module';

/*Custom Components*/

@NgModule({
  imports: [SidenavModule, ToolbarModule],
  exports: [ToolbarModule, SidenavModule],
})
export class CoreModule {}
