import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';
import { createEmptyUserAccount, UserAccount } from './user-account.model';

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
      console.log(data);
      this.userInfo = data;
    });
  }
}
