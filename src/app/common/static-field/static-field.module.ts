import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { StaticFieldComponent } from './static-field.component';

@NgModule({
  declarations: [StaticFieldComponent],
  imports: [CommonModule, MatInputModule],
  exports: [StaticFieldComponent],
})
export class StaticFieldModule {}
