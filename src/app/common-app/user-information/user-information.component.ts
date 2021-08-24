import { Component, Input, OnInit } from '@angular/core';
import { UserAccount } from '../../pods/account/user-account.model';

@Component({
  selector: 'atm-user-information',
  template: `
    <div fxLayout="column" fxFlexFill>
      <div class="item">
        <p class="title"> Personal Detail </p>
        <div *ngFor="let item of userInfo.userDetails | keyvalue">
          <cdk-static-field
            *ngIf="validateValueToComponent(item.value)"
            [label]="item.key | capitalizeSpace"
            [value]="validateValue(item.value)"
          ></cdk-static-field>
        </div>
      </div>

      <div class="item">
        <p class="title"> User Address </p>
        <div *ngFor="let item of userInfo.userAddress | keyvalue">
          <cdk-static-field
            class="user_information__static-field"
            *ngIf="validateValueToComponent(item.value)"
            [label]="item.key | capitalizeSpace"
            [value]="validateValue(item.value)"
          ></cdk-static-field>
        </div>
      </div>

      <div class="item">
        <p class="title"> Contact </p>
        <div *ngFor="let item of userInfo.userContact | keyvalue">
          <cdk-static-field
            *ngIf="validateValueToComponent(item.value)"
            [label]="item.key | capitalizeSpace"
            [value]="validateValue(item.value)"
          ></cdk-static-field>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./user-information.component.scss'],
})
export class UserInformationComponent implements OnInit {
  public details: any;
  public contact: any;
  public other: any;

  @Input()
  public userInfo!: UserAccount;

  @Input()
  public title: boolean = true;

  public validateValueToComponent(value: any) {
    return typeof value !== 'object';
  }

  public validateValue(value: any) {
    return value.toString();
  }

  constructor() {}

  ngOnInit(): void {
    const keys = Object.keys(this.userInfo);
    // console.log(keys);
    // console.log(keys[0]);
    // console.log(this.userInfo);
    // this.details = this.userInfo[keys[0]];
    // console.log(this.details);
  }
}
