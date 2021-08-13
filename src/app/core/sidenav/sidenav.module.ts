import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
/* Angular Module/Components */
import { NgModule } from '@angular/core';
/* Three Party*/
import { NgScrollbarModule } from 'ngx-scrollbar';
import { RouterModule } from '@angular/router';
import { SideMenuModule } from '../../common/side-menu/side-menu.module';
/* Custom Modules/Components */
import { SidenavComponent } from './sidenav.component';
import { UserAvatarModule } from '../../common/user-avatar/user-avatar.module';

@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule,
    MatExpansionModule,
    NgScrollbarModule,
    RouterModule,
    UserAvatarModule,
    SideMenuModule,
  ],
  exports: [SidenavComponent],
})
export class SidenavModule {}
