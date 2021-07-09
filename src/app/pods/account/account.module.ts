import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { RouterModule } from '@angular/router';
import { CommonAppModule } from '../../common-app';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AccountComponent],
  imports: [CommonModule, RouterModule, CommonAppModule, MatCardModule],
  exports: [AccountComponent],
})
export class AccountModule {}
