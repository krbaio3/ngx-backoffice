import { Injectable } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { AuthResult, AuthService, AuthToken } from '@atmira/authentication';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

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

  constructor(private authService: AuthService, private router: Router) {}

  getToken(): string {
    return <string>localStorage.getItem(this.AUTH_APP_TOKEN);
  }

  saveToken(token: string): void {
    localStorage.setItem(this.AUTH_APP_TOKEN, token);
  }

  removeToken(): void {
    localStorage.removeItem(this.AUTH_APP_TOKEN);
  }

  loginKeycloak() {
    this.authService
      .authenticate('keycloak')
      .pipe(takeUntil(this.destroy$))
      .subscribe((authResult: AuthResult) => {});
  }

  logoutKeycloak() {
    this.authService
      .logout('keycloak')
      .pipe(takeUntil(this.destroy$))
      .subscribe((authResult: AuthResult) => {
        this.router.navigate(['/login']);
      });
  }

  tokenChangeKeyCloak() {
    this.authService
      .onTokenChange()
      .pipe(takeUntil(this.destroy$))
      .subscribe((token: AuthToken) => {
        this.token = undefined;
        if (token && token.isValid()) {
          this.token = token;
        }
      });
  }
}
