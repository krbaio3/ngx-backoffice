import { AdHocScaffoldComponent } from './ad-hoc-scaffold.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AdHocScaffoldComponent],
  imports: [CommonModule, MatCardModule],
  exports: [AdHocScaffoldComponent],
})
export class AdHocScaffoldModule {}
