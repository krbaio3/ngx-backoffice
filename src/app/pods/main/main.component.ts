import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { filter } from 'rxjs/operators';
import { mainRoutesNames } from './main-routes-names';

@Component({
  selector: 'atm-main',
  template: `
    <mat-card [ngSwitch]="group">
      <mat-card-title class="my-4">{{ currentRoute }}</mat-card-title>
      <atm-summary *ngSwitchCase="'reporting'"></atm-summary>
      <atm-summary *ngSwitchCase="'output'"></atm-summary>
      <atm-summary *ngSwitchCase="'input'"></atm-summary>
      <atm-summary *ngSwitchCase="'search'"></atm-summary>
      <atm-summary *ngSwitchCase="'reports'"></atm-summary>
      <p *ngSwitchDefault>Consulte al administrador</p>
    </mat-card>
  `,
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public currentRoute: string;
  public group: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    //TODO sacar a funciones
    const name =
      this.router.url.split('/')[this.router.url.split('/').length - 1];

    this.group =
      // this.router.url.split('/')[this.router.url.split('/').length - 2];
      this.extractGroup(this.router.url);

    const found: [string, string] | undefined = Object.entries(
      mainRoutesNames,
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
    return path.split('/')[path.split('/').length - 2];
  }
}
