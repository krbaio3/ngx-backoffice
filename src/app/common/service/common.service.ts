import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  private userMenuLogoutEvent = new BehaviorSubject<boolean>(false);

  public emitUserMenuLogoutEvent(value: boolean) {
    this.userMenuLogoutEvent.next(value);
  }

  public userMenuLogoutEventListener() {
    return this.userMenuLogoutEvent.asObservable();
  }
}
