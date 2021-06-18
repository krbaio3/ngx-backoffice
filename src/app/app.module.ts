import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { DashboardModule } from './common-app/dashboard/dashboard.module';
import { SidenavModule } from './common-app/sidenav/sidenav.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    DashboardModule,
    SidenavModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
