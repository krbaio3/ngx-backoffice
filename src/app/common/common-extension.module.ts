import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ToolbarNotificationComponent } from './toolbar-notification/toolbar-notification.component';
import { MatRippleModule } from '@angular/material/core';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  declarations: [
    SearchBarComponent,
    FullscreenComponent,
    ToolbarNotificationComponent,
    UserMenuComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatListModule,
    ScrollingModule,
    NgScrollbarModule,
  ],
  exports: [
    SearchBarComponent,
    FullscreenComponent,
    ToolbarNotificationComponent,
    UserMenuComponent,
  ],
})
export class CommonExtensionModule {}
