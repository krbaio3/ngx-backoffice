import { Component, Input, OnInit } from '@angular/core';
import {
  UserAccount,
  UserAddress,
  UserContact,
} from '../../pods/account/user-account.model';

@Component({
  selector: 'atm-user-information',
  template: `
    <!--    <div fxLayout="column" fxFlexFill>-->
    <!--    <div class="item">-->
    <!--    <div *ngFor="let item of userInfo | keyvalue">-->
    <!--      <cdk-static-field-->
    <!--        *ngIf="validateValueToComponent(item.value); else isObject"-->
    <!--        [label]="item.key | capitalizeSpace"-->
    <!--        [value]="validateValue(item.value)"-->
    <!--      ></cdk-static-field>-->
    <!--      <ng-template #isObject>-->
    <!--        &lt;!&ndash;          <div class="item2">&ndash;&gt;-->
    <!--        <p class="title">{{ item.key | capitalizeSpace }}</p>-->
    <!--        <atm-user-information-->
    <!--          [userInfo]="item.value"-->
    <!--          [title]="false"-->
    <!--        ></atm-user-information>-->
    <!--        &lt;!&ndash;          </div>&ndash;&gt;-->
    <!--      </ng-template>-->
    <!--    </div>-->

    <!--    </div>-->
    <!--    </div>-->

    <!--    <div *ngFor="let item of userInfo | keyvalue">-->
    <!--      {{ userInfo | transformObject }}-->
    <!--      &lt;!&ndash;      <p class="title">{{ item.key | capitalizeSpace }}</p>&ndash;&gt;-->
    <!--      <p class="title">{{ item.key | capitalizeSpace }}</p>-->
    <!--&lt;!&ndash;            {{ item | json }}&ndash;&gt;-->
    <!--&lt;!&ndash;      {{ item | json }}&ndash;&gt;-->
    <!--      <div *ngFor="let i of item | keyvalue">-->
    <!--&lt;!&ndash;        {{ i.value | json }}&ndash;&gt;-->
    <!--        <div *ngFor="let t of i | keyvalue">-->
    <!--          {{ t | json }}-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    <div *ngFor="let item of userInfo | keyvalue">-->
    <!--      <div *ngFor="let i of item">-->
    <!--        {{ item.value | json }}-->
    <!--      <cdk-static-field-->
    <!--        [label]="item.value | capitalizeSpace"-->
    <!--        [value]="validateValue(item.value)"-->
    <!--      ></cdk-static-field>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--      <cdk-static-field-->
    <!--        [label]="item.value | capitalizeSpace"-->
    <!--        [value]="validateValue(item.value)"-->
    <!--      ></cdk-static-field>-->
    <!--          </div>-->
    <!--    </div>-->

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
    if (typeof value === 'object') return false;
    return true;
  }

  public validateValue(value: any) {
    // console.log(value);
    return value.toString();
  }

  constructor() {}

  ngOnInit(): void {
    const keys = Object.keys(this.userInfo);
    console.log(keys);
    console.log(keys[0]);
    console.log(this.userInfo);
    // this.details = this.userInfo[keys[0]];
    console.log(this.details);
  }
}
