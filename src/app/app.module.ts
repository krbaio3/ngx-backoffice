/* Angular Modules*/

import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

/* Custom Modules */
import { CoreModule } from './core';
import { AppRoutingModule } from './app-routing.module';
import { AccountModule } from './pods/account/account.module';
import { DocumentationModule } from './pods/documentation/documentation.module';
import { MainModule } from './pods/main/main.module';
import { AdvancedQueriesModule } from './pods/advanced-queries/advanced-queries.module';

/* Custom Components/Services/Models */
import { CurrentUser, SidenavModel } from './common';
import { AppComponent } from './app.component';
import { AppInitService } from './app-init.service';
import { BenchmarkModule } from './pods/benchmark/benchmark.module';

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
