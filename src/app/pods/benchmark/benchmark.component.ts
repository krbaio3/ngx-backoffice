import { Component, OnInit } from '@angular/core';

@Component({
  template: ` <p> benchmark works! </p> `,
  styles: [],
})
export class BenchmarkComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('BenchmarkComponent');
  }
}
