import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFileComponent } from './input-file.component';
import { ProgressComponent } from './progress/progress.component';
import { DndDirective } from './dnd/dnd.directive';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [InputFileComponent, ProgressComponent, DndDirective],
  imports: [CommonModule, MatIconModule, MatButtonModule, FlexLayoutModule],
  exports: [InputFileComponent],
})
export class InputFileModule {}
