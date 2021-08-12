import { AccountService } from './account.service';
import { AccountComponent } from './account.component';
import { CommonAppModule } from '../../common-app';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserInformationModule } from '../../common-app/user-information/user-information.module';

// TODO: Refactorizar para lazy load
@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    RouterModule,
    CommonAppModule,
    MatCardModule,
    UserInformationModule,
  ],
  exports: [AccountComponent],
  providers: [AccountService],
})
export class AccountModule {}
