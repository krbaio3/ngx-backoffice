import { AccountRoutingModule } from './account-routing.module';
import { AccountService } from './account.service';
import { AccountComponent } from './account.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserInformationModule } from '../../common-app/user-information/user-information.module';

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    UserInformationModule,
    AccountRoutingModule,
  ],
  exports: [AccountComponent],
  providers: [AccountService],
})
export class AccountModule {}
