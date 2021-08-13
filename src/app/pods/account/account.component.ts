import { Component, OnInit } from '@angular/core';
import { UserAccount, createEmptyUserAccount } from './user-account.model';

import { AccountService } from './account.service';

@Component({
  selector: 'atm-account',
  template: ` <mat-card>
    <h1>User Information</h1>
    <atm-user-information [userInfo]="userInfo"></atm-user-information>
  </mat-card>`,
  styles: [],
})
export class AccountComponent implements OnInit {
  public userInfo: UserAccount = createEmptyUserAccount();

  constructor(private accountSrv: AccountService) {}
  ngOnInit() {
    this.accountSrv.getUserAccount().subscribe((data) => {
      this.userInfo = data;
    });
  }
}
