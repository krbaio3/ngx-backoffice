import { Injectable } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { AuthResult, AuthService, AuthToken } from '@atmira/authentication';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthObject, Value } from './auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthAppService {
  get token(): AuthToken | undefined {
    return this._token;
  }

  set token(value: AuthToken | undefined) {
    this._token = value;
  }
  private AUTH_APP_TOKEN = 'auth_app_token';
  private destroy$ = new Subject<void>();
  private _token!: AuthToken | undefined;

  constructor(
    private authService: AuthService,
    private router: Router, // private $http: HttpClient,
  ) {}

  getToken(): string {
    debugger;
    const { value } = <AuthObject>(
      JSON.parse(<string>localStorage.getItem(this.AUTH_APP_TOKEN))
    );
    const { id_token } = <Value>JSON.parse(<string>value);
    // return <string>localStorage.getItem(this.AUTH_APP_TOKEN);
    return id_token;
  }
  //
  // saveToken(token: string): void {
  //   localStorage.setItem(this.AUTH_APP_TOKEN, token);
  // }
  //
  // removeToken(): void {
  //   localStorage.removeItem(this.AUTH_APP_TOKEN);
  // }

  loginKeycloak() {
    this.authService
      .authenticate('keycloak')
      .pipe(takeUntil(this.destroy$))
      .subscribe((authResult: AuthResult) => {
        authResult.isSuccess() && console.log(authResult.getToken());
      });
  }

  logoutKeycloak() {
    // const token = this.getToken();
    this.authService
      .logout('keycloak')
      .pipe(takeUntil(this.destroy$))
      .subscribe((authResult: AuthResult) => {
        debugger;
        console.log(authResult);
        // this.$http
        //   .get(
        //     `http://keycloak.f39dfd9526b64ddcb1c4.westeurope.aksapp.io/auth/realms/master/protocol/openid-connect/logout?id_token_hint=${token}&http:%2F%2Flocalhost:5555%2Fcallback`,
        //   )
        //   .subscribe((data) => {
        //     console.log(data);
        //   });
        authResult.isSuccess() && this.router.navigate(['/login']);
      });
  }

  tokenChangeKeyCloak() {
    this.authService
      .onTokenChange()
      .pipe(takeUntil(this.destroy$))
      .subscribe((token: AuthToken) => {
        this.token = undefined;
        debugger;
        if (token && token.isValid()) {
          this.token = token;
        }
      });
  }
}
