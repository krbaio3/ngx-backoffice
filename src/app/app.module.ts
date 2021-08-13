import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AccountModule } from './pods/account/account.module';
import { AppComponent } from './app.component';
import { AppInitService } from './app-init.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core';
import { CurrentUser } from './common/user-avatar/user-avatar.model';
import { DocumentationModule } from './pods/documentation/documentation.module';
import { MainModule } from './pods/main/main.module';
import { SidenavModel } from './common/side-menu/sidenav.model';
import { AdvancedQueriesModule } from './pods/advanced-queries/advanced-queries.module';

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
    DocumentationModule,
    MainModule,
    AdvancedQueriesModule,
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
