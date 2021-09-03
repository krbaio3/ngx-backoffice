import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { returnCurrentRoute } from '../../utils/router.helper';
import { benchmarkRoutesNames } from './benchmark-routes-names';

@Component({
  template: `
    <mat-card>
      <mat-card-title class="my-4">{{ currentRoute }}</mat-card-title>
      <router-outlet></router-outlet>
    </mat-card>
  `,
})
export class BenchmarkComponent {
  public currentRoute: string;
  public group: string;

  constructor(private router: Router) {
    const [group, currentRoute] = returnCurrentRoute(
      this.router,
      benchmarkRoutesNames,
    );

    this.group = group;
    this.currentRoute = currentRoute;
  }
}
