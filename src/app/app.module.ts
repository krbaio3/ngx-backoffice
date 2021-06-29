import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CoreModule } from './core/core.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SidenavModule } from './common-app/sidenav/sidenav.module';
import { DocumentationModule } from './documentation/documentation.module';
import { MainModule } from './main/main.module';
import { AccountModule } from './account/account.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    SidenavModule,
    DocumentationModule,
    MainModule,
    AccountModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
