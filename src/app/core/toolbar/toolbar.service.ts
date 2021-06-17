import {
  CurrentUser,
  Notification,
  currentUser,
  notification,
} from './toolbar.helpers';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToolbarService {
  constructor(public $http: HttpClient) {}

  getToolbarUser(): Observable<CurrentUser> {
    return of<CurrentUser>(currentUser);
  }

  /**
   * Devuelve las notificaciones para el usuario pasado
   * @param id
   */
  getNotifications(id: string): Observable<Notification[]> {
    return of<Notification[]>(notification);
  }
}
