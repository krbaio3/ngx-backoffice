import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private _sidenav!: MatSidenav;

  public setSidenav(value: MatSidenav) {
    this._sidenav = value;
  }

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
