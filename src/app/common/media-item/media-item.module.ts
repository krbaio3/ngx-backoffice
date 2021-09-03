import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MediaItemComponent } from './media-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MediaItemComponent],
  imports: [CommonModule, FlexLayoutModule, MatIconModule],
  exports: [MediaItemComponent],
})
export class MediaItemModule {}
