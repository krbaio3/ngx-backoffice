/* Angular Module/Components */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';

/* Three Party*/
import { NgScrollbarModule } from 'ngx-scrollbar';

/* Custom Modules/Components */
import { SidenavComponent } from './sidenav.component';
import { CommonExtensionModule } from '../../common';
import { SidenavRoutingModule } from './sidenav-routing.module';

@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    CommonExtensionModule,
    FlexLayoutModule,
    MatExpansionModule,
    NgScrollbarModule,
    SidenavRoutingModule,
  ],
  exports: [SidenavComponent],
})
export class SidenavModule {}
