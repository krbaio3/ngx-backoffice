/* Angular Modules/Components*/
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
/* Custom Modules*/
import {
  SearchBarModule,
  UserMenuModule,
  ToolbarNotificationModule,
  FullscreenModule,
} from '../../common';
/*Custom Components*/
import { ToolbarComponent } from './toolbar.component';
/*Custom Service*/
import { ToolbarService } from './toolbar.service';

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
