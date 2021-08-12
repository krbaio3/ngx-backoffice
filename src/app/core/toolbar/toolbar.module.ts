import { FullscreenModule } from './../../common/fullscreen/fullscreen.module';
/* Custom Modules*/
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
/* Angular Modules/Components*/
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
/*Custom Components*/
import { ToolbarComponent } from './toolbar.component';
import { ToolbarNotificationModule } from '../../common/toolbar-notification/toolbar-notification.module';
/*Custom Service*/
import { ToolbarService } from './toolbar.service';
import { UserMenuModule } from '../../common/user-menu/user-menu.module';
import { SearchBarModule } from 'src/app/common/search-bar/search-bar.module';

@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    RouterModule,
    FlexLayoutModule,
    HttpClientModule,
    ToolbarNotificationModule,
    UserMenuModule,
    SearchBarModule,
    FullscreenModule,
  ],
  providers: [ToolbarService],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
