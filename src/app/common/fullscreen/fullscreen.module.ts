import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { FullscreenComponent } from './fullscreen.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FullscreenComponent],
  imports: [CommonModule, MatButtonModule, FlexLayoutModule, MatIconModule],
  exports: [FullscreenComponent],
})
export class FullscreenModule {}
