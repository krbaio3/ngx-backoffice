import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonExtensionModule } from '../common/common-extension.module';
import { HttpClientModule } from '@angular/common/http';
import { GuidesComponent } from './guides/guides.component';
import { SummaryComponent } from './summary/summary.component';
import { UserInformationComponent } from './user-information/user-information.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    GuidesComponent,
    SummaryComponent,
    UserInformationComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    RouterModule,
    FlexLayoutModule,
    CommonExtensionModule,
    HttpClientModule,
  ],
  exports: [
    ToolbarComponent,
    GuidesComponent,
    SummaryComponent,
    UserInformationComponent,
  ],
})
export class CoreModule {}
