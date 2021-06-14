import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  currentUser,
  CurrentUser,
  Notification,
  notification,
} from './toolbar.helpers';
import { Observable, of } from 'rxjs';

@Injectable()
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
