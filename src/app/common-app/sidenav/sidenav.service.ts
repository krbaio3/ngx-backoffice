import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  get flag(): Observable<boolean> {
    return this._flag$;
  }
  set flag(value: Observable<boolean>) {
    this._flag$ = value;
  }
  // @ts-ignore
  private _sidenav: MatSidenav;

  public setSidenav(value: MatSidenav) {
    this._sidenav = value;
  }

  private _flag$: Observable<boolean> = new Observable<boolean>();

  public sideNavToggleSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    undefined,
  );

  public toggle() {
    return this.sideNavToggleSubject.next(true);
  }

  public close() {
    return this._sidenav.close();
  }

  public open() {
    return this._sidenav.open();
  }
}
