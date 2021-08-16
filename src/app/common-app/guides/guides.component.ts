import { Component, OnInit } from '@angular/core';

@Component({
  template: ` <p> guides works! </p> `,
  styles: [
    `
      /* p {
        color: #eeeeee;
      } */
    `,
  ],
})
export class GuidesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('GuideComponent');
  }
}
