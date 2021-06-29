import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'atm-user-info',
  template: ` <p> user-info works! </p> `,
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('entra');
  }
}
