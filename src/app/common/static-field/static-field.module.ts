import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { StaticFieldComponent } from './static-field.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [StaticFieldComponent],
  imports: [CommonModule, MatInputModule, MatIconModule],
  exports: [StaticFieldComponent],
})
export class StaticFieldModule {}
