import { AuthResult, AuthService } from '@atmira/authentication';
import { Component, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'atm-callback',
  template: `
    <div class="center_spinner">
      <p>Authenticating...</p>
      <mat-progress-spinner
        class="example-margin"
        color="primary"
        mode="indeterminate"
      ></mat-progress-spinner>
    </div>
  `,
  styles: [
    `
      .center_spinner {
        letter-spacing: normal;
        height: 100%;
        display: flex;
        width: 100%;
        justify-content: center;
        align-content: center;
        flex-direction: column;
        align-items: center;
      }
    `,
  ],
})
export class OAuth2CallbackComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(private authService: AuthService, private router: Router) {
    this.authService
      .authenticate('keycloak')
      .pipe(takeUntil(this.destroy$))
      .subscribe((authResult: AuthResult) => {
        if (authResult.isSuccess() && authResult.getRedirect()) {
          this.router.navigateByUrl(authResult.getRedirect());
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
