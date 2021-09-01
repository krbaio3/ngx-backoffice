import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  private userMenuLogoutEvent = new BehaviorSubject<boolean>(false);

  emitUserMenuLogoutEvent(value: boolean) {
    this.userMenuLogoutEvent.next(value);
  }

  userMenuLogoutEventListener() {
    return this.userMenuLogoutEvent.asObservable();
  }
}
