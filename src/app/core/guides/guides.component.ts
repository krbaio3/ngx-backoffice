import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'atm-guides',
  template: ` <p> guides works! </p> `,
  styles: [
    `
      p {
        color: #eeeeee;
      }
    `,
  ],
})
export class GuidesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('entra en GuideComponent');
  }
}
