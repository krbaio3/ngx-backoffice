import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAccount } from './user-account.model';
import { catchError, map, pluck, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { mapUserAccountFromApiToVM } from './api-to-vm';
import { UserAccountAPI } from './user-account.api.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private $http: HttpClient) {}

  getUserAccount(): Observable<UserAccount> {
    return this.$http.get<UserAccountAPI>('assets/json/user-account.json').pipe(
      // catchError(async (error) => console.error(error)),
      tap<UserAccountAPI>(mapUserAccountFromApiToVM),
      pluck<UserAccountAPI, UserAccount>('data'),
    );
  }
}
