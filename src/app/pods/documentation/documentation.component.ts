import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { returnCurrentRoute } from '../../utils/router.helper';
import { documentationRoutesNames } from './documentation-routes-names';

@Component({
  template: `
    <mat-card>
      <mat-card-title class="my-4">{{ currentRoute }}</mat-card-title>
      <router-outlet></router-outlet>
    </mat-card>
  `,
})
export class DocumentationComponent {
  public currentRoute: string;
  public group: string;

  constructor(private router: Router) {
    const [group, currentRoute] = returnCurrentRoute(
      this.router,
      documentationRoutesNames,
    );

    this.group = group;
    this.currentRoute = currentRoute;
  }

}
