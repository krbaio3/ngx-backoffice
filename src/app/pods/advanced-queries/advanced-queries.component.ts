import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { advancedQueriesRoutesNames } from './advanced-queries-routes-names';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'atm-advanced-queries',
  template: `
    <mat-card [ngSwitch]="group">
      <mat-card-title class="my-4">{{ currentRoute }}</mat-card-title>
      <!--      <atm-advanced-filters *ngSwitchCase="'filters'"></atm-advanced-filters>-->
      <!--      <atm-ad-hoc-reports> *ngSwitchCase="'reports'"></atm-ad-hoc-reports>-->
      <router-outlet></router-outlet>
      <!--      <p *ngSwitchDefault>Consulte al administrador</p>-->
    </mat-card>
  `,
  styleUrls: ['./advanced-queries.component.scss'],
})
export class AdvancedQueriesComponent implements OnInit {
  public currentRoute: string;
  public group: string;

  constructor(private router: Router) {
    // TODO: sacar a funciones
    const name =
      this.router.url.split('/')[this.router.url.split('/').length - 1];

    this.group =
      // this.router.url.split('/')[this.router.url.split('/').length - 2];
      this.extractGroup(this.router.url);

    const found: [string, string] | undefined = Object.entries(
      advancedQueriesRoutesNames,
    ).find((pair) => pair[0] === name);

    this.currentRoute = !!found
      ? (found as Array<string>)[1]
      : 'Nombre no encontrado';
  }

  ngOnInit() {
    // TODO: sacar a funciones
    this.router.events
      .pipe(filter((event): boolean => event instanceof NavigationEnd))
      .subscribe((data) => {
        // console.log('====>', this.activatedRoute.root.url);
        // this.activatedRoute.root.url.subscribe((data) => console.log(data));
        this.group = this.extractGroup((data as NavigationEnd).url);
      });
  }

  extractGroup(path: string): string {
    return path.split('/')[path.split('/').length - 1];
  }
}
