import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { CommonAppModule } from '../../common-app';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, RouterModule, MatCardModule, CommonAppModule],
  exports: [MainComponent],
})
export class MainModule {}
