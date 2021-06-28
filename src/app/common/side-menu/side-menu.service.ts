import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MenuElement, menus } from './menu-element';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SideMenuService {
  constructor(private $http: HttpClient) {}

  getSideMenu(): Observable<MenuElement[]> {
    return of<MenuElement[]>(menus);
  }
}
