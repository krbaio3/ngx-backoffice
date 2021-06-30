import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocumentationModule } from './pods/documentation/documentation.module';
import { MainModule } from './pods/main/main.module';
import { AccountModule } from './pods/account/account.module';
import { CoreModule } from './core';
import { AppInitService } from './app-init.service';
import { MenuElement } from './common/side-menu/menu-element';
import { CurrentUser } from './common/user-avatar/user-avatar.model';

export function initializeSideNav(appInitService: AppInitService) {
  return (): Promise<MenuElement[]> => {
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
    DocumentationModule,
    MainModule,
    AccountModule,
    CoreModule,
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
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
