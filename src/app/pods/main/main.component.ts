import { returnCurrentRoute } from '../../utils/router.helper';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

import { mainRoutesNames } from './main-routes-names';

@Component({
  template: `
    <mat-card>
      <mat-card-title class="my-4">{{ currentRoute }}</mat-card-title>
      <router-outlet></router-outlet>
    </mat-card>
  `,
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public currentRoute: string;
  public group: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    const [group, currentRoute] = returnCurrentRoute(
      this.router,
      mainRoutesNames,
    );

    this.group = group;
    this.currentRoute = currentRoute;
  }
}
