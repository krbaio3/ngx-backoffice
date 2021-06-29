import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { CommonExtensionModule } from '../../common/common-extension.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { RouterModule, Routes } from '@angular/router';
import { GuidesComponent } from '../../core/guides/guides.component';
import { CoreModule } from '../../core/core.module';
// import { DashboardRoutes } from '../../dashboard/dashboard-routing.module';

const routes: Routes = [
  {
    path: 'docs',
    children: [
      { path: 'guides', component: GuidesComponent, outlet: 'sidebar' },
    ],
  },
];

@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    CommonExtensionModule,
    FlexLayoutModule,
    MatExpansionModule,
    NgScrollbarModule,
    RouterModule,
    // RouterModule.forChild(routes),
    CoreModule,
    // DashboardRoutes,
  ],
  exports: [
    SidenavComponent,
    // DashboardRoutes
  ],
})
export class SidenavModule {}
