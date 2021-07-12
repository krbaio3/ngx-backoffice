import { Notify, notification } from './toolbar.helpers';
import { Observable, of } from 'rxjs';
import { CurrentUser } from '../../common/user-avatar/user-avatar.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppInitService } from '../../app-init.service';

@Injectable({
  providedIn: 'root',
})
export class ToolbarService {
  constructor(public $http: HttpClient, private appInitSrv: AppInitService) {}

  // getToolbarUser(): Observable<CurrentUser> {
  //   return of<CurrentUser>(this.appInitSrv.userAvatarData);
  // }

  /**
   * Devuelve las notificaciones para el usuario pasado
   * @param id
   */
  getNotifications(id: string): Observable<Notify[]> {
    return of<Notify[]>(notification);
  }
}
