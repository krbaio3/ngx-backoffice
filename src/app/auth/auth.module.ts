import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OAuth2LoginComponent } from './oauth2-login.component';
import { OAuth2CallbackComponent } from './oauth2-callback.component';
import { ButtonsModule } from '@atmira/pattern-lib';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [OAuth2LoginComponent, OAuth2CallbackComponent],
  imports: [CommonModule, ButtonsModule, MatProgressSpinnerModule],
  exports: [OAuth2LoginComponent, OAuth2CallbackComponent],
})
export class AuthAppModule {}
