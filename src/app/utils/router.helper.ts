import { filter } from 'rxjs/operators';
import { Router, NavigationEnd, Event } from '@angular/router';
import { Observable } from 'rxjs';

export const routerGroup = (router: Router): Observable<Event> =>
  router.events.pipe(
    filter((event): boolean => event instanceof NavigationEnd),
  );

export interface RoutesNames {
  [key: string]: string;
}

export const returnCurrentRoute = (
  router: Router,
  routesNames: RoutesNames,
) => {
  const name = router.url.split('/')[router.url.split('/').length - 1];

  const group =
    // this.router.url.split('/')[this.router.url.split('/').length - 2];
    extractGroup(router.url);

  const found: [string, string] | undefined = Object.entries(routesNames).find(
    (pair) => pair[0] === name,
  );

  const currentRoute = !!found ? (found as Array<string>)[1] : 'Name not found';

  return [group, currentRoute];
};

export const extractGroup = (path: string): string =>
  path.split('/')[path.split('/').length - 1];
