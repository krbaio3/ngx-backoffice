import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ToolbarNotificationComponent } from './toolbar-notification.component';

@NgModule({
  declarations: [ToolbarNotificationComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    NgScrollbarModule,
  ],
  exports: [ToolbarNotificationComponent],
})
export class ToolbarNotificationModule {}
