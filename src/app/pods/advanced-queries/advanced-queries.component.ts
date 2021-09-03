import { returnCurrentRoute } from '../../utils/router.helper';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { advancedQueriesRoutesNames } from './advanced-queries-routes-names';

@Component({
  template: `
    <mat-card>
      <mat-card-title class="my-4">{{ currentRoute }}</mat-card-title>
      <router-outlet></router-outlet>
    </mat-card>
  `,
  styleUrls: ['./advanced-queries.component.scss'],
})
export class AdvancedQueriesComponent {
  public currentRoute: string;
  public group: string;

  constructor(private router: Router) {
    const [group, currentRoute] = returnCurrentRoute(
      this.router,
      advancedQueriesRoutesNames,
    );

    this.group = group;
    this.currentRoute = currentRoute;
  }
}
