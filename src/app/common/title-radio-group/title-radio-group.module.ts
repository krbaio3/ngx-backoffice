import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatRadioModule } from '@angular/material/radio';
import { NgModule } from '@angular/core';
import { TitleRadioGroupComponent } from './title-radio-group.component';

@NgModule({
  declarations: [TitleRadioGroupComponent],
  imports: [CommonModule, MatRadioModule, FlexLayoutModule],
  exports: [TitleRadioGroupComponent],
})
export class TitleRadioGroupModule {}
