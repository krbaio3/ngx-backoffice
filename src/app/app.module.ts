/* Angular Modules*/

import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

/* Custom Modules */
import { CoreModule } from './core';
import { AppRoutingModule } from './app-routing.module';

/* Custom Components/Services/Models */
import { CurrentUser, SidenavModel } from './common';
import { AppComponent } from './app.component';
import { AppInitService } from './app-init.service';
import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  AuthModule,
  AuthOAuth2Token,
  OAuth2AuthStrategy,
  OAuth2GrantType,
  OAuth2ResponseType,
} from '@atmira/authentication';
import { AuthAppModule } from './auth/auth.module';

export function initializeSideNav(appInitService: AppInitService) {
  return (): Promise<SidenavModel[]> => {
    return appInitService.sidenavMenuLoad();
  };
}

export function initializeUserAvatar(appInitService: AppInitService) {
  return (): Promise<CurrentUser> => {
    return appInitService.userAvatarLoad();
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    AuthAppModule,
    AuthModule.forRoot({
      strategies: [
        OAuth2AuthStrategy.setup({
          name: 'keycloak',
          clientId: 'frontend',
          baseEndpoint:
            'http://keycloak.f39dfd9526b64ddcb1c4.westeurope.aksapp.io/auth/realms/master/protocol/openid-connect',
          clientSecret: '46fc7df4-0454-4a54-91ba-723ad1cf16b3',
          redirect: {
            success: '/',
            failure: undefined,
          },
          authorize: {
            endpoint: '/auth',
            responseType: OAuth2ResponseType.CODE,
            scope: 'openid email roles',
            redirectUri: 'http://localhost:5555/callback',
          },
          token: {
            endpoint: '/token',
            grantType: OAuth2GrantType.AUTHORIZATION_CODE,
            redirectUri: 'http://localhost:5555/callback',
            scope: 'openid email',
            class: AuthOAuth2Token,
          },
        }),
      ],
    }),
  ],
  providers: [
    AppInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeSideNav,
      deps: [AppInitService],
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeUserAvatar,
      deps: [AppInitService],
      multi: true,
    },
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
