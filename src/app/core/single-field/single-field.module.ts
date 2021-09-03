import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { SingleFieldComponent } from './single-field.component';

@NgModule({
  declarations: [SingleFieldComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [SingleFieldComponent],
})
export class SingleFieldModule {}
